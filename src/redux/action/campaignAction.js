import { toast } from "react-toastify"
import { Config } from "../../configs/Config"
import { api } from "../../api/api"

export const addcampaignApi = (data) => {
    return async () => {
        const response = await api(Config.apiEndPoints.addcampaign, data, "post")
        if (response.status === 200) {
            return response
        } else {
            toast.error(response.data.message)
        }
    }
}