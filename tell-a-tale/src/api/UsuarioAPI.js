import { axiosBase as axios } from "./Config";

//quite token
export const GetUsuarioById = async () => {
    try{
        const response = await axios.get('/usuario/' + "613f0802d3fee5546d011eb6");                                         
        console.log("ObtenerUsuario", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Usuario" + error);
        return error;
    }
}