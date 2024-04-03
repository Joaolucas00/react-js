import http from "../common/config/api";

const bandeirasServices = {
    get: async (bandeiraIds: Array<any>) => {
        const query = new URLSearchParams();
        bandeiraIds.forEach(id => query.append('id', id));
        const resposta = await http.get(`/bandeiras?${query.toString()}`);
    
        return resposta.data;
    }
}

export default bandeirasServices