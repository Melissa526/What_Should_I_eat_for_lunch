import React, {Component} from 'react';

class MapControl extends Component{
    render() {
        return (
            <div className="custom_zoomcontrol radius_border">
                <span id="zoomIn">
                    <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
                </span>

                <span id="zoomOut" onClick={this.zoomOut}>
                    <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
                </span>
            </div>
        );
    }
}
export default MapControl;