import React from 'react'
import PropTypes from 'prop-types'
import { Button, Spinner } from 'reactstrap'

const SubmitButton = ({ type, color, className, label, isSubmit }) => {
    return (
        <Button
            className={className}
            type={type}
            color={color}
            disabled={isSubmit}
        >
            {isSubmit ? (
                <Spinner size={'sm'} />
            ) : (
                <>
                    {label}
                </>
            )}
        </Button>
    )
}

SubmitButton.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    isSubmit: PropTypes.bool.isRequired
}

export default SubmitButton