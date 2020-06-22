import React, {Component} from 'react';

class SearchBox extends Component{
    render() {
        return (
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
        );
    }
}
export default SearchBox;