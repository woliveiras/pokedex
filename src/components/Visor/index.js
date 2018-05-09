import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default function Visor(props) {
    const isVisorActive = props.isVisorActive

    const renderActionButton = () => {
        if (isVisorActive) {
            return (
                <input type="text" />
            )
        }
        return (
            <button
                className="visor__action-button"
                onClick={ props.toggleVisor }>
            </button>
        )
    }
    return (
        <div
            className="visor"
            style={{ height: isVisorActive ? '420px' : '' }}>
            { renderActionButton() }
        </div>
    )
}

Visor.propTypes = {
    isVisorActive: PropTypes.bool.isRequired,
    toggleVisor: PropTypes.func.isRequired
}