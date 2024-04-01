import http from "../common/config/api"


const produtosServices = {
    get: async () => {
        const response = await http.get('/itens')
        return response.data
    },
    getProduto: async (categoria: string | undefined) => {
        const response = await http.get(`/itens/?categoria=${categoria}`)
        return response.data
    }
}

export default produtosServices