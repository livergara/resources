import axios from "axios";
import type {AxiosInstance} from "axios"

const apiInstance: AxiosInstance = axios.create({
    baseURL: `http://1ddsc-s-btx02.gk.rosatom.local/api/v1/`
})

export default apiInstance