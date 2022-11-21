export const Config = {
        basename: process.env.REACT_APP_BASENAME,
        apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
        apiEndPoints: {
             addcampaign : process.env.REACT_APP_API_AUTH_ADD_CAMPAIGN,
             getcampaign : process.env.REACT_APP_API_AUTH_GET_CAMPAIGN,
             deletecampaign : process.env.REACT_APP_API_AUTH_DELETE_CAMPAIGN
        }
}