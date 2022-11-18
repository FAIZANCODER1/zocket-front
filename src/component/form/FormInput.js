import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

const FormInput = ({ autoFocus, type, placeholder, className, name, setFieldValue, value, isDisabled }) => {

    const onChangeOfInput = (eve) => {
        setFieldValue(name, eve.target.value)
    }

    return (
        <Input
            name={name}
            autoFocus={autoFocus}
            type={type}
            value={value}
            disabled={isDisabled}
            placeholder={placeholder}
            className={className}
            onChange={onChangeOfInput}
        />
    )
}

FormInput.propTypes = {
    autoFocus: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.any,
    isDisabled: PropTypes.any
}

export default FormInput