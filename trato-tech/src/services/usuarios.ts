import http from "../common/config/api"

const usuariosServices = {
    getByID: async (id: number) => {
        const response = await http.get(`/usuarios/${id}`)
        return response.data
    }
}

export default usuariosServices