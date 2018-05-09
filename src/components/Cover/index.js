import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default function Cover(props) {
    const positionsMap = {
        'top': 'top-bar',
        'bottom': 'bottom-bar'
    }
    const position = props.position
    const positionClass = positionsMap[position]
    const styles = {
        flex: '1',
        backgroundColor: '#c40c24',
        border: '1px solid #52181c',
        height: '210px'
    }

    return (
        <div 
            style={ styles }
            className={ positionClass }>
        </div>
    )
}

Cover.propTypes = {
    position: PropTypes.string.isRequired
};