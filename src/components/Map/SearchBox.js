import React, {Component} from 'react';
class SearchBox extends Component{
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="map_search_wrapper">
                <div className="search_box">
                    {/* 검색필드 영역 */}
                    <button type="button" className="btn_search ng-star-inserted">
                        <img src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" />
                    </button>
                    <div className="input_box">
                        <input type="text" className="input_search" id="input_search" placeholder="장소, 키워드로 검색"/>
                    </div>
                </div>

                <div className="search_result">                       {/* 검색결과 목록 */}
                    <ul className="search_list" id="search_list">
                        <li>tt</li>
                    </ul>
                </div>

                <button type="button" className="btn_more ng-star-inserted expand"> {/* 검색창 확대,축소 버튼 */}
                    <span className="blind">검색창 축소</span>
                </button>
            </div>
        );
    }
}
export default SearchBox;