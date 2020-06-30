/*global kakao*/
import React, {Component} from 'react';

import '../../style/map.css';
import SearchBox from './SearchBox';
import MapControl from './MapControl';

/**
 * 최초작성일 : 2020.06.19
 * @author D'diue
 *
 */
class Map extends Component {

    state = {
        map: null,
        lat: null,
        lng: null,
        searchResult: [],
        markers: []
    }

    componentDidMount() {
        const container = document.getElementById('map'),
              options = {
                  center : new kakao.maps.LatLng(33.450701, 126.570667),
                  level : 3
              };

        const Kakao = {
            map : new kakao.maps.Map(container, options) ,
            marker : new kakao.maps.Marker({
                position :  new kakao.maps.LatLng(33.450701, 126.570667),
                clickable: true
            })
        };

        Kakao.marker.setMap(Kakao.map);                                         //default 마커 생성

        //지도 초기화 생성
        this.init(Kakao.map, Kakao.marker);


        //마커 위에 인포윈도우 생성
        //TODO 리팩토링 필요
        var iwContent = `<div className='marker_infowindow'>Hello World!</div>`,
            iwRemoveable = true;
        var infoWindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
        kakao.maps.event.addListener(Kakao.marker, 'click', ()=>{
            infoWindow.open(Kakao.map, Kakao.marker);
        });


        //검색창에 키워드 검색
        let places = new kakao.maps.services.Places();
        let searchInput = document.getElementById('input_search');
        this.searchPlaces(searchInput, Kakao.map, places);

        this.moveMarker(Kakao.map, Kakao.marker);

        this.zoomIn(Kakao.map);
        this.zoomOut(Kakao.map);
    }

    //카카오맵 초기화
    init(map, marker) {

        if (navigator.geolocation) {                     // HTML5의 geolocation으로 사용할 수 있을 때
            //접속위치 수집
            navigator.geolocation.getCurrentPosition((position) => {

                this.setState({
                    lat : position.coords.latitude,     //위도
                    lng : position.coords.longitude     //경도
                });

                this.displayMap(this.state, map, marker);
            })
        } else {

            this.setState({
                lat: 37.55593912727525,
                lon: 126.97353989504036
            });
            this.displayMap(this.state, map, marker);
        }
    }


    //키워드 검색
    searchPlaces(searchInput, map, places) {

        searchInput.addEventListener('keyup', (e) => {

            if (e.keyCode === 13) {
                let keyWord = searchInput.value;

                if (!keyWord.replace(/^\s+|\s+$/g, '')) {
                    alert('키워드를 입력해주세요!');
                    return false;
                }

                var placeSearchCallback = (data, status, pagination) => {

                    if (status === kakao.maps.services.Status.OK) {

                        console.log(data);
                        this.setState({
                            searchResult : data
                        });
                        this.displayPlaces(map, data);

                    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

                        alert('검색결과가 존재하지 않습니다');
                        return;

                    } else if (status === kakao.maps.services.Status.ERROR) {

                        alert('검색 결과 중 오류가 발생했습니다');
                        return;

                    }
                };

                //장소검색 객체 생성
                places.keywordSearch(keyWord, placeSearchCallback, {
                    category_group_code : 'FD6',
                    radius : 10000,
                    location : new kakao.maps.LatLng(this.state.lat, this.state.lng),
                    size : 4
                });
            }
        });
    }



    // 카카오맵 그리기
    displayMap(state, map, marker) {

        let locPosition = new kakao.maps.LatLng(state.lat, state.lng);
        this.displayMarker(map, marker, locPosition);

        map.setCenter(locPosition);
    }

    //마커 생성
    displayMarker(map, marker, latlng) {
        marker.setPosition(latlng);

        const {markers} = this.state;
        this.setState({
           markers : markers.concat(marker)
        });
    }

    //지도 클릭한 곳으로 마커 이동
    moveMarker(map, marker) {
        kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
            this.displayMarker(map, marker, mouseEvent.latLng);
        });
    }

    //검색결과목록 마커 표시
    displayPlaces(map, places){

        let listE1 = document.getElementById('search_list'),
            bounds = new kakao.maps.LatLngBounds();

        //Step1. 맵 초기화
        //TODO 마커 제거
        var {markers} = this.state;
        for(let i=0 ; i<markers.length ; i++){
            console.log(markers[i]);
            markers[i].setMap(null);
        }
        this.setState({
            markers : []
        });


        //Step2.
        //검색된 마커 표시
        for(let i=0 ; i<places.length ; i++){
            let placeLocation = new kakao.maps.LatLng(places[i].y, places[i].x);
            let mark = new kakao.maps.Marker({
                map : map,
                position : placeLocation,
                title : places[i].place_name
            });
            bounds.extend(placeLocation);
        }

        //step3. 지도레벨 조정
        map.setBounds(bounds);
    }

    //지도 확대
    zoomIn(map) {
        document.getElementById('zoomIn').addEventListener('click', () => {
            map.setLevel(map.getLevel() - 1);
        });
    }

    //지도 축소
    zoomOut(map) {
        document.getElementById('zoomOut').addEventListener('click', () => {
            map.setLevel(map.getLevel() + 1);
        });
    }


    render() {
        return (
            <div className="map_wrapper">
                <div className="map" id="map"></div>    {/* 지도 출력 영역*/}
                <SearchBox data={this.state.searchResult} />  {/* 검색창 */}
                <MapControl/>                           {/* 지도 확대,축소 컨트롤박스 */}
            </div>
        );
    }
}
export default Map;