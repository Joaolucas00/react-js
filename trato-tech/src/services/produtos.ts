import http from "../common/config/api"
import { IProdutos } from "../interfaces/IProdutos"


const produtosServices = {
    get: async (): Promise<IProdutos[]> => {
        const response = await http.get('/itens')
        return response.data
    }
}

export default produtosServices