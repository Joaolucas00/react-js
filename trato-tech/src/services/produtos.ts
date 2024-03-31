import http from "../common/config/api"
import { IProdutos } from "../interfaces/IProdutos"


const produtosServices = {
    get: async () => {
        const response = await http.get('/itens')
        return response.data
    }
}

export default produtosServices