import axios from "axios"

class ClientServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config
        })
    }

    // newClient = (clientData) => {
    //     return this.axiosApp.post(`/api/clients/newClient`, clientData)
    // }
    getClient = (clientId) => {
        return this.axiosApp.get(`/api/clients/${clientId}`)
    }

    editClient = (clientData) => {
        return this.axiosApp.put(`/api/clients/clientId`, clientData)
    }

    deleteClient = (clientData) => {
        return this.axiosApp.delete(`/api/clients/clientId`, clientData)
    }

}

export default new ClientServices()