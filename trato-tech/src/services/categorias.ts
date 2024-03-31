import http from "../common/config/api"
import { ICategorias } from "../interfaces/ICategorias"

const categoriasServices = {
    get: async () => {
        const response = await http.get('/categorias')
        return response.data
    }
}

export default categoriasServices