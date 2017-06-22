import React, { Component } from 'react';
import Search from './search.component';

class LayoutComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='wrap'>
                <header>
                    
                </header>
                <Search />
            </div>
        );
    }
}



export default LayoutComponent;