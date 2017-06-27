import React, { Component } from 'react';
import Search from './search.component';
import List from './list.component';

class LayoutComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='wrap'>
                <Search />
                <List />
            </div>
        );
    }
}



export default LayoutComponent;