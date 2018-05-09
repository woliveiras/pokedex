import React from 'react'
import PropTypes from 'prop-types'

export default function ActionButton(props) {
    const styles = {
        backgroundColor: 'white',
        border: '1px solid #b4e5ec',
        borderRadius: '50%',
        width: '160px',
        height: '160px',
        position: 'absolute',
        outline: 'none'
    }
    
    return (
        <button
            style={ styles }
            onClick={ props.action }>
        </button>
    )
}

ActionButton.propTypes = {
    action: PropTypes.func.isRequired
}