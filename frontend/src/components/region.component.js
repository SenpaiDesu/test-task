import React from 'react';

export default (props) => {
    return(
        <li
            onClick={ () => { 
                props.select(props.data);
                props.toggle(); 
            } }
        >
            { props.data.name }
        </li>
    );
}