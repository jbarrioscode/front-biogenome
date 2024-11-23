export const getRequestError = (error) => {

    const errorMessage = 'API Error, por favor intentalo de nuevo'

    if (error.email === 'Fetch User') return error.message

    if (!error.response) {
        console.error(`ruta de API ${error.config.url} no encontrada`)
        return errorMessage
    }

    if (error.response.statusCode === 422 || error.response.statusCode === 429) return error.response.data.message

    if (import.meta.env.VITE_NODE_ENV === 'development') {
        console.error(error.response.data)
        console.error(error.response.status)
        console.error(error.response.headers)
    }

    if (error.response.data && error.response.data.errors) return error.response.data.errors

    return errorMessage

}