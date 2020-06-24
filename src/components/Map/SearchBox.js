import React, {Component} from 'react';
import SearchItemInfo from './SearchItemInfo';

class SearchBox extends Component{
    constructor(props){
        super(props);
    }


    render() {


        return (
            <div className="map_search_wrapper">
                <div className="search_box">
                    {/* 검색필드 영역 */}
                    <button type="button" className="btn_search ng-star-inserted">검색</button>
                    <div className="input_box">
                        <input type="text" className="input_search" id="input_search" placeholder="장소, 키워드로 검색"/>
                    </div>
                </div>

                <div className="search_result">                       {/* 검색결과 목록 */}
                    <ul className="search_list" id="search_list">
                        {
                            this.props.data.map((data, i)=>{
                                return (<SearchItemInfo name = {data.place_name}
                                                        jibunAddr = {data.address_name}
                                                        roadAddr = {data.road_address_name}
                                                        phone = {data.phone}
                                                        url = {data.place_url}
                                                        category = {data.category_name}
                                                        key={i} />);
                        })
                        }
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