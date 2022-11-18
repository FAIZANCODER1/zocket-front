export const Config = {
        basename: process.env.REACT_APP_BASENAME,
        apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
        apiEndPoints: {
                login: process.env.REACT_APP_API_AUTH_LOGIN,
                logout: process.env.REACT_APP_API_AUTH_LOGOUT,
                changePassword : process.env.REACT_APP_API_AUTH_CHNAGE_PASSWORD,
                forgotPassword : process.env.REACT_APP_API_AUTH_FORGOT_PASSWORD,
                resetPassword : process.env.REACT_APP_API_AUTH_RESET_PASSWORD,
                verifyToken : process.env.REACT_APP_API_AUTH_VERIFY_TOKEN,
                userlisting : process.env.REACT_APP_API_AUTH_USER_LIST,
                changeStatus : process.env.REACT_APP_API_AUTH_ACTIVE_INACTIVE,
                deleteUser : process.env.REACT_APP_API_AUTH_USER_DELETE,
                EditProfile : process.env.REACT_APP_API_AUTH_USER_EDIT_PROFILE,
                profilDetail : process.env.REACT_APP_API_AUTH_USER_DETAIL,
                recorddetail : process.env.REACT_APP_API_RECORDS_DETAILS,
                exportrecord : process.env.REACT_APP_API_export
        }
}