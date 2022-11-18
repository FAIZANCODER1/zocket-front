import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

const FormCheckBox = ({ id, type, className, checked, setState }) => {
    return (
        <Input
            id={id}
            type={type}
            className={className}
            checked={checked}
            onChange={() => setState(!checked)}
        />
    )
}

FormCheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    className: PropTypes.string
}

export default FormCheckBox