import axios from "axios";

export const URL_SERVER = 'https://mako-comic-deer.ngrok-free.app/api/v1'

const instance = axios.create({
    baseURL: URL_SERVER
})
instance.defaults.withCredentials = true;

instance.interceptors.request.use(config => {
    // const token = getLocalStorage('token')

    config.headers["Authorization"] = `Bearer`

    return config
}, (err) => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    return res
},
    async err => {
        // if (statusError === 403) {
        //     // clearLocalStorage()
        //     window.location.href = '/auth'
        // }

        return Promise.reject(err)
    }
)


export const get = async (url) => {
    try {
        const result = await instance.get(url)

        return result.data
    } catch (err) {
        handleError(err)
    }
}

export const post = async (url, data) => {
    try {
        const result = await instance.post(url, data)

        return result.data
    } catch (err) {
        handleError(err)
    }
}

export const put = async (url, data) => {
    try {
        const response = await instance.put(url, data);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const del = async (url) => {
    try {
        const result = await instance.delete(url)

        return result.data
    } catch (err) {
        handleError(err)
    }
}

const handleError = (err) => {
    console.log(err)
}