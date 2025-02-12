import Api from "./Api";
import type { AxiosResponse } from "axios";

export default {
    index (): Promise<AxiosResponse> {
        return Api.get('resource')
    },
    show (resourceId: any): Promise<AxiosResponse> {
        return Api.get(`resource/${resourceId}`)
    },
    post (resource: any): Promise<AxiosResponse> {
        return Api.post('resource', resource)
    },
    put (resource: any): Promise<AxiosResponse> {
        return Api.put(`resource/${resource.id}`, resource)
    }
}