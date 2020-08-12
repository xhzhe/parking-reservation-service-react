import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.cressDomain = true
axios.defaults.baseUrl = "http://10.222.29.209:8090"

const baseUrl = 'http://10.222.29.209:8090'

export function getOrder(orderID) {
    return axios({
        method: 'get',
        url: `${baseUrl}/parkingOrders?userId=${orderID}`,
        withCredentials: true
    })
}

export function getOrders() {
    return axios({
        method: 'get',
        url: baseUrl
    })
}

export function saveOrder(order) {
    return axios({
        method: 'post',
        url:`${baseUrl}/parkingOrders`,
        data: order
    })
}

export function getParkingLots(lng, lat, destinationName) {
    return axios({
        method: 'get',
        url: `${baseUrl}/parkingLots?lng=${lng}&lat=${lat}&destinationName=${destinationName}`
    })
}

export function comfirmOrder(orderID) {
    return axios({
        method:'patch',
        url:`${baseUrl}/parkingOrders/${orderID}?type=1`,
        data:{
            status:"ALREADY_SURE"
        }
    })
}

export function cancelOrder(orderID) {
    return axios({
        method:'patch',
        url:`${baseUrl}/parkingOrders/${orderID}`,
        data:{
            status:"DELETED"
        }
    })
}

export function loginTest(userInfo) {
    return axios({
        method: 'post',
        url: `${baseUrl}/user/login`,
        data: userInfo,
        withCredentials: true
    })
}
