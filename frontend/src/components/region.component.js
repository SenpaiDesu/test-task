import React from 'react';

export default (props) => {
    return(
        <li
            onClick={ () => { this.props.select(props) } }
        >
            { props.data.name }
        </li>
    );
}