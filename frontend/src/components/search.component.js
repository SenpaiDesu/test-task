import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Region from './region.component';

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.setupRegionList = this.setupRegionList.bind(this);
    }

    componentWillMount(){
        this.props.getRegions();
    }


    setupRegionList(){
        let list = [];
        if (this.props.visible){
            this.props.data.map((item, i) => {
                list.push(
                    <Region 
                        key={ i }          
                        data={ item }
                        select={ this.props.selectRegion }
                        toggle={ this.props.toggleVisibility }
                    />
                );
            });
        }
        return list;
    }
    
    render(){
        console.log(this.props);
        return(
            <div className='list-header'>
                <input 
                    type="text" 
                    readOnly 
                    className='search'
                    placeholder='Select region..'
                    value={ this.props.selected ? this.props.selected.name : '' }
                    onClick={ this.props.toggleVisibility } 
                />
                <ul className='list-select'>
                    { this.setupRegionList() }
                </ul>
                <button 
                    className='search'
                >
                    &#x1f50d;
                </button>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return state.regions;
}

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        getRegions: actions.getRegions,
        selectRegion: actions.selectRegion,
        toggleVisibility: actions.toggleVisibility,
        getPropertiesByRegion: actions.getPropertiesByRegion
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(SearchComponent);
