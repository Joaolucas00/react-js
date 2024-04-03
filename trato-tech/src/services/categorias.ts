import http from "../common/config/api"
import { ICategorias } from "../interfaces/ICategorias"

const categoriasServices = {
    get: async (): Promise<ICategorias[]> => {
        const response = await http.get('/categorias')
        return response.data
    },
    getUmaCategoria: async (categoria: string | undefined): Promise<ICategorias> => {
        const response = await http.get(`/categorias/${categoria}`)
        return response.data
    }
}

export default categoriasServices