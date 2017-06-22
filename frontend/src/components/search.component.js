import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Region from './region.component';

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.setupRegionList = this.setupRegionList.bind(this);
        this.changeVisible = this.changeVisible.bind(this);
        //this.getRegionByName = this.getRegionByName.bind(this);
        this.state = { ulActive: false };
    }

    componentWillMount(){
        this.props.getRegions();
        console.log(this.props);
    }

    changeVisible(previousState){
        this.setState(previousState => {
            return { ulActive: !previousState.ulActive };
        });
    }

    /*getRegionByName(name){
        this.props.data.map((item, i) => {
            if (item.name == name) return item;
        });
        return {};
    }*/

    onSelect(){

    }
    
    setupRegionList(){
        let list = [];
        if (this.state.ulActive){
            this.props.data.map((item, i) => {
                list.push(
                    <Region 
                        key={ i }          
                        data={ item }
                        select={ this.props.selectRegion }
                    />
                );
            });
        }
        return list;
    }
    
    render(){
        return(
            <div className='list-header'>
                <input 
                    type="text" 
                    readOnly 
                    className='search'
                    placeholder='Select region..'
                    value={ this.props.selected.name }
                    onClick={ () => { this.changeVisible(this.state) } } 
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
        getPropertiesByRegion: actions.getPropertiesByRegion
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(SearchComponent);
