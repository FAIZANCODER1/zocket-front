import { PASSWORD_MIN_CHARACTER, PASSWORD_MAX_CHARACTER } from './constants'


export const errorMessage = {
    emailValid: 'Please enter valid email.',
    emailRequired: 'Please enter email.',
    passwordRequired: 'Please enter password.',
    passwordMinCharacter: `Please enter minimum ${PASSWORD_MIN_CHARACTER} characters.`,
    passwordMaxCharacter: `Please enter maximum ${PASSWORD_MAX_CHARACTER} characters.`,
    passwordValid: 'Password require at least one uppercase character, one lowercase character, one number and one special(@$!%*?&) character.',
    firstNameRequired: "Please enter first name.",
    lastNameRequired: "Please enter last name.",
    contactRequired: "Please enter contact number.",
    contactValid: "Please enter valid contact number.",
    addressRequired: "Please enter address.",
    cityRequired: 'Please enter city name.',
    stateRequired: "Please enter state name.",
    pincodeRequired: "Please enter pincode.",
    pincodeValid: "Please enter valid pincode",
    deliveryFeesRequired: "Please enter delivery fees.",
    deliveryFeesValid: "Please enter valide delivery fees."
}
export const toastErrorMessage = {
    sessionExpired: 'Your token has been expired login again.',
    internalServerError: 'Something went wrong!',
    serviceUnavailable: 'Service unavailable for now try after some time.',
    imageSizeRestriction: 'Can not upload image which size more then 5MB'
}