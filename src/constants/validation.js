import * as Yup from 'yup'
import { PASSWORD_MAX_CHARACTER, PASSWORD_MIN_CHARACTER } from './constants'
import { errorMessage } from './message'
import { CONTACT_NUMBER_REGEX, PASSWORD_REGEX, PINCODE_NUMBER_REGEX, POSTIVE_NUMBER } from './regexConstant'
import { PRODUCT_NAME_REQUIRE, PRODUCT_CODE_REQUIRE, SELECT_CATEGORY_REQUIRE, QUANTITY_REQUIRE, BRAND_NAME_REQUIRE, R_PRICE_REQUIRE, MANUFACTURE_REQUIRE, OPRICE_REQUIRE, MINIMUM_QUANTITY, MINIMUM_MRP, MINIMUM_OFFER_PRICE, MAX_600_WORDS, DISCRIPTION_REQUIRED } from './validatonConstant'
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required(errorMessage.emailRequired)
    .email(errorMessage.emailValid),
  password: Yup.string()
    .required(errorMessage.passwordRequired)
   
})


export const sellerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(errorMessage.firstNameRequired),
  lastName: Yup.string()
    .required(errorMessage.lastNameRequired),
  email: Yup.string()
    .required(errorMessage.emailRequired)
    .email(errorMessage.emailValid),
  password: Yup.string()
    .required(errorMessage.passwordRequired)
    .min(PASSWORD_MIN_CHARACTER, errorMessage.passwordMinCharacter)
    .max(PASSWORD_MAX_CHARACTER, errorMessage.passwordMaxCharacter)
    .matches(PASSWORD_REGEX, errorMessage.passwordValid),
  contact: Yup.string()
    .required(errorMessage.contactRequired)
    .matches(CONTACT_NUMBER_REGEX, errorMessage.contactValid),
  address: Yup.string()
    .required(errorMessage.addressRequired),
  city: Yup.string()
    .required(errorMessage.cityRequired),
  state: Yup.string()
    .required(errorMessage.stateRequired),
  pincode: Yup.string()
    .required(errorMessage.pincodeRequired)
    .matches(PINCODE_NUMBER_REGEX, errorMessage.pincodeValid)
})

export const profileValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(errorMessage.firstNameRequired),
  lastName: Yup.string()
    .required(errorMessage.lastNameRequired),
  email: Yup.string()
    .required(errorMessage.emailRequired)
    .email(errorMessage.emailValid)
  // phone: Yup.string()
  //   .required(errorMessage.contactRequired)
  //   .matches(CONTACT_NUMBER_REGEX, errorMessage.contactValid),
  // address: Yup.string()
  //   .required(errorMessage.addressRequired),
  // city: Yup.string()
  //   .required(errorMessage.cityRequired),
  // pin: Yup.string()
  //   .required(errorMessage.pincodeRequired)
  //   .matches(PINCODE_NUMBER_REGEX, errorMessage.pincodeValid),
  // deliveryFees: Yup.string()
  //   .required(errorMessage.deliveryFeesRequired)
  //   .matches(POSTIVE_NUMBER, errorMessage.deliveryFeesValid)
})


const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}
export const SignupSchema = Yup.object().shape({
  currentPassword: Yup
    .string()
    .min(8, obj => showErrors('Current Password', obj.value.length, obj.min))
    .required(),
  newPassword: Yup
    .string()
    .min(8, obj => showErrors('New Password', obj.value.length, obj.min))
    .required(),
  retypeNewPassword: Yup
    .string()
    .min(8, obj => showErrors('Retype New Password', obj.value.length, obj.min))
    .required()
    .oneOf([Yup.ref(`newPassword`), null], 'Passwords must match')
})

export const variationSchema = Yup.object().shape({

})
export const DescValidationAchema = Yup.object().shape({
  desc: Yup.string().required(DISCRIPTION_REQUIRED).max(600, MAX_600_WORDS)
})
export const basicInfoVlidationSchema = Yup.object().shape({
  productName: Yup.string().required(PRODUCT_NAME_REQUIRE),
  productCode: Yup.string().required(PRODUCT_CODE_REQUIRE),
  productCategory: Yup.object().required(SELECT_CATEGORY_REQUIRE),
  quantity: Yup.number().required(QUANTITY_REQUIRE).min(1, MINIMUM_QUANTITY),
  brandName: Yup.string().required(BRAND_NAME_REQUIRE),
  mrp: Yup.number().required(R_PRICE_REQUIRE).min(0, MINIMUM_MRP),
  manufacturer: Yup.string().required(MANUFACTURE_REQUIRE),
  offerPrice: Yup.number().required(OPRICE_REQUIRE).min(0, MINIMUM_OFFER_PRICE)
})

export const registerValidation = Yup.object().shape({
  firstName : Yup.string().required(),
  lastName : Yup.string().required(),
  email : Yup.string().required(),
  password : Yup.string().required(errorMessage.passwordRequired)
  .min(PASSWORD_MIN_CHARACTER, errorMessage.passwordMinCharacter)
  .max(PASSWORD_MAX_CHARACTER, errorMessage.passwordMaxCharacter)
  .matches(PASSWORD_REGEX, errorMessage.passwordValid),
  rpassword : Yup.string().required(errorMessage.passwordRequired)
  .min(PASSWORD_MIN_CHARACTER, errorMessage.passwordMinCharacter)
  .max(PASSWORD_MAX_CHARACTER, errorMessage.passwordMaxCharacter)
  .matches(PASSWORD_REGEX, errorMessage.passwordValid)


})

export const changePasswordValidation = Yup.object().shape({
  Cpassword : Yup.string().required(),
Npassword : Yup.string().required(errorMessage.passwordRequired)
.min(PASSWORD_MIN_CHARACTER, errorMessage.passwordMinCharacter)
.max(PASSWORD_MAX_CHARACTER, errorMessage.passwordMaxCharacter)
.matches(PASSWORD_REGEX, errorMessage.passwordValid),
Rpassword : Yup.string()
.min(8, obj => showErrors('Retype New Password', obj.value.length, obj.min))
.required()
.oneOf([Yup.ref(`Npassword`), null], 'Passwords must match')

}) 

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().trim()
      .required(errorMessage.emailRequired)
      .email(errorMessage.emailValid)
})

export const resetPasswordValidationSchema = Yup.object().shape({
  newPassword: Yup.string().trim()
      .required(errorMessage.passwordRequired)
      .min(PASSWORD_MIN_CHARACTER, errorMessage.passwordMinCharacter)
      .max(PASSWORD_MAX_CHARACTER, errorMessage.passwordMaxCharacter)
      .matches(PASSWORD_REGEX, errorMessage.passwordValid),
  confirmPassword: Yup.string()
      .required(errorMessage.confirmPasswordRequired)
      .oneOf([Yup.ref('newPassword')], errorMessage.confirmPasswordValid)
})