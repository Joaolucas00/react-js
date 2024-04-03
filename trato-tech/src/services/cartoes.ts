import http from "../common/config/api"

const cartoesServices = {
    getByIdUsuarios: async (usuarioId: number | string) => {
        const response =  await http.get(`/cartoes?usuarioId=${usuarioId}`)
        return await response.data
    }  
}

export default cartoesServices