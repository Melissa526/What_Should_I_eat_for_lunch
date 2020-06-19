/*global kakao*/
import React, {Component} from 'react';

class Map extends Component {

    componentDidMount() {
        const api = document.createElement('script');
        api.type = 'text/javascript';
        api.async = true;
        api.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=34b5b027cd5adc029f043051ec0c4c58&autoload=false';

        document.head.appendChild(api);

        api.onload = () => {
            kakao.maps.load(()=>{
                var container = document.getElementById('map');
                var options = {
                    center : new kakao.maps.LatLng(33.450701, 126.570667),
                    level : 3
                };
                var map = new window.kakao.maps.Map(container, options);
            });
        }
    }

    render() {

        const mapStyle={ width : '100%', height : '100vh'}

        return (
            <div className="wrapper">
                <div className="map_wrapper" id="map" style={mapStyle}></div>
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