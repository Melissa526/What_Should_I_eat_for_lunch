import React, {Component} from 'react';

class SearchItemInfo extends Component{
    render() {
        return(
            <li className="search_item">
                <label className="item_category">{this.props.category}</label>
                <h3><a href={this.props.url} >{this.props.name}</a></h3>
                {this.props.roadAddr} ({this.props.jibunAddr}) <br/    >
                <label className="item_opt_tel">{this.props.phone}</label>
            </li>
        );
    }
}
export default SearchItemInfo;