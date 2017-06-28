import React from 'react';

export default (props) => {
    console.log(props.avgPrice);
    return(
        <div className='list-item'>
            <h3 className='flex-title'> { props.data.title } </h3>
            <div className='item-info'>
                <div className='flex-image'>
                    <img src={ props.data.pictures[0].thumbSize } alt=""/>
                </div>
                
                <div className='flex-desc'>
                    <p>Location: { props.data.typeAndLocation.label }</p>
                    <p>Price: { props.data.price }</p>
                    <p>Delta price: { props.data.price - props.avgPrice }</p>
                </div>
            </div>
        </div>
    );
}