import http from "../common/config/api"

const categoriasServices = {
    get: async () => {
        const response = await http.get('/categorias')
        return response.data
    }
}

export default categoriasServices