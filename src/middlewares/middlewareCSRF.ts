import axios from 'axios'

const getCookiesArray = () => document.cookie.split(';').reduce((cookieArray, cookie) => {
    let [key] = cookie.split('=')
    if (key) cookieArray.push(key.trim())
    return cookieArray
}, [])


const middlewareCSFR = async axiosconfig => {
    let cookies = getCookiesArray()
    let isTokenMissing = !cookies.includes('XSRF-TOKEN')

    let methodsNeedCSRF = ['get', 'post', 'put', 'patch', 'delete'] //other methods you want to add here
    let doesMethodRequireCSRF = methodsNeedCSRF.includes( axiosconfig.method )

    if ( isTokenMissing && doesMethodRequireCSRF ) {
        // then first get the CSRF Token
        let pathCSFR = '/sanctum/csrf-cookie'
        let urlToCall = `${import.meta.env.VITE_BASE_URL || 'http://localhost:8000'}${pathCSFR}`
        await axios.get(urlToCall, {withCredentials:true, withXSRFToken: true})
        // then continue with the request
        return axiosconfig
    }

    return axiosconfig
}

export { middlewareCSFR as default }