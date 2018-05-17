import React from 'react'
import PropTypes from 'prop-types'
// Animation helpers
import { Motion, spring } from 'react-motion'
// Components
import ActionButton from '../ActionButton'
import SearchInput from '../SearchInput'
// Styles
import './index.css'

export default function Visor(props) {
    const isVisorActive = props.isVisorActive

    const renderActionButton = () => {
        if (isVisorActive) {
            return(
                <SearchInput />
            )
        }
        return (
            <ActionButton action={ props.toggleVisor }/>
        )
    }
    return (
        <Motion
            defaultStyle={{ height: 0 }}
            style={{ height: isVisorActive ? spring(420) : 0 }}>
            {interpolatingStyle => 
                <div className="visor" style={interpolatingStyle}>
                    { renderActionButton() }
                </div>
            }
        </Motion>
    )
}

Visor.propTypes = {
    isVisorActive: PropTypes.bool.isRequired,
    toggleVisor: PropTypes.func.isRequired
}