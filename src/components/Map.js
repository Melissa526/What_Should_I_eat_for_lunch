/*global kakao*/
import React, {Component} from 'react';
import '../style/map.css';

/**
 * 기능
 - 상호명/주소로 검색
 - 상세정보 핀 조회
 - 길 찾기
 - 지도 공유하기
 * kakao api key
 *  - REST API : e006030e593351829abe445c51d6a272
 *  - Javascript : 34b5b027cd5adc029f043051ec0c4c58
 *  - Admin : 8e2728c492a17ef70d758b827b79c6b0
 * *
 * 최초작성일 : 2020.06.19
 * @author D'diue
 *
 */
class Map extends Component {

    constructor(props){
        super(props);
        this.state = {
            map : null
        }
    }

    componentDidMount() {
        var container = document.getElementById('map'),
            options = {
                center : new kakao.maps.LatLng(33.450701, 126.570667),
                level : 3
            };
        var map =  new kakao.maps.Map(container, options);                  //지도 생성

        var marker = new kakao.maps.Marker({
            position :  new kakao.maps.LatLng(33.450701, 126.570667),
            clickable: true
        })
        marker.setMap(map);                                                 //default 마커 생성

        //HTML5의 geolocation으로 사용할 수 있을 때
        if(navigator.geolocation){
            //접속위치 수집
            navigator.geolocation.getCurrentPosition((position) =>{
                var lat = position.coords.latitude,     //위도
                    lng = position.coords.longitude;    //경도

                var locPosition = new kakao.maps.LatLng(lat,lng),
                    message = `<div style="padding:5px;">여기?!</div>`;

                this.displayMarker(map, marker, locPosition);
                map.setCenter(locPosition);
            })
        }else{
            var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
                message = `geolocation을 사용할 수 없어요!`;
            this.displayMarker(map, marker, locPosition);
            map.setCenter(locPosition);
        }

        //마커 위에 인포윈도우 생성
        //TODO 리팩토링 필요
        var iwContent = `<div className='marker_infowindow'>Hello World!</div>`,
            iwRemoveable = true;
        var infoWindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });

        kakao.maps.event.addListener(marker, 'click', ()=>{
            infoWindow.open(map, marker);
        });

        this.setNewMarker(map, marker);
        this.zoomIn(map);
        this.zoomOut(map);
    }

    setNewMarker(map, marker) {
        kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
            this.displayMarker(map, marker, mouseEvent.latLng);
        });
    }

//클릭한 위치에 마커 생성
    displayMarker(map, marker, latlng) {
        marker.setPosition(latlng);
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

                <div className="map" id="map"></div>                    {/* 지도 출력 영역*/}

                {/* 검색창 [s] */}
                <div className="map_search_wrapper">
                    <div className="search_box">
                        {/* 검색필드 영역 */}
                        <button type="button" className="btn_search ng-star-inserted">검색</button>
                        <div className="input_box">
                            <input type="text" className="input_search ng-pristine ng-valid ng-touched"
                                   id="input_search1592815360778" placeholder="장소, 키워드로 검색"/>
                        </div>
                    </div>

                    <div className="search_list">                       {/* 검색결과 목록 */}

                    </div>


                    <button type="button" className="btn_more ng-star-inserted expand"> {/* 검색창 확대,축소 버튼 */}
                        <span className="blind">검색창 축소</span>
                    </button>

                </div>
                {/* 검색창 [e] */}


                {/* 지도 확대,축소 컨트롤박스 [s] */}
                <div className="custom_zoomcontrol radius_border">
                    <span id="zoomIn">
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
                    </span>
                    <span id="zoomOut" onClick={this.zoomOut}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
                    </span>
                </div>
                {/* 지도 확대,축소 컨트롤박스 [e] */}

            </div>
        );
    }
}

export default Map;