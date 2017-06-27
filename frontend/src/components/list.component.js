import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Item from './item.component';

class ListComponent extends Component {
    constructor(props){
        super(props);
        this.setupPropertiesList = this.setupPropertiesList.bind(this);
    }
    
    setupPropertiesList(){
        let list = [];
        let avgPrice = 0;
        this.props.data.map((item, i) => {
            avgPrice += item.price;
        });
        if (avgPrice) avgPrice /= this.props.data.length;
        this.props.data.map((item, i) => {
            list.push(
                <Item 
                    key={ i }          
                    data={ item }
                    avgPrice={ Math.round(avgPrice) }
                />
            );
        });
        
        return list;
    }
    
    render(){
        return(
            <div className='list-body'>
                { this.setupPropertiesList() }
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