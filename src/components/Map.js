/*global kakao*/
import React, {Component} from 'react';
import '../style/map.css';

class Map extends Component {

    constructor(props){
        super(props);
        this.state = {
            map : null
        }

        this.zoomIn = this.zoomIn.bind();
        this.zoomOut = this.zoomOut.bind();
    }

    componentDidMount() {
        var container = document.getElementById('map'),
            options = {
                center : new window.kakao.maps.LatLng(33.450701, 126.570667),
                level : 3
            };
        this.map =  new window.kakao.maps.Map(container, options);
    }

    zoomIn(){
        map.setLevel(map.getLevel()-1);
    }

    zoomOut(){
        map.setLevel(map.getLevel()+1);
    }

    render() {

        return (
            <div className="map_wrapper">
                {/* 지도 출력 영역*/}
                <div className="map" id="map"></div>

                {/* 지도 확대,축소 컨트롤박스 */}
                <div className="custom_zoomcontrol radius_border">
                    <span onClick={this.zoomIn}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
                    </span>
                    <span onClick={this.zoomOut}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
                    </span>
                </div>
            </div>
        );
    }
}

export default Map;

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