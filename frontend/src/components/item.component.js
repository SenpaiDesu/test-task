import React from 'react';

export default (props) => {
    return(
        <div className='item'>
            <div><img src={ props.data.pictures['thumbSize'] } alt=""/></div>
        </div>
    );
}