import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Item from './item.component';

class ListComponent extends Component {
    setupPropertiesList(){
        let list = [];
        this.props.data.map((item, i) => {
            list.push(
                <Item 
                    key={ i }          
                    data={ item }
                />
            );
        });
        return list;
    }
    
    render(){
        return(
            <div className='list-body'>

            </div>
        );
    }
}

const stateToProps = (state) => {
    return state.properties;
}

/*const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        getRegions: actions.getRegions,
        selectRegion: actions.selectRegion,
        toggleVisibility: actions.toggleVisibility,
        getPropertiesByRegion: actions.getPropertiesByRegion
    }, dispatch);
}*/

export default connect(stateToProps, null)(ListComponent);