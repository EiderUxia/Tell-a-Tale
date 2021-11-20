import { axiosBase as axios } from "./Config";


export const GetCapituloComicById = async () => {
    try{
        const response = await axios.get('/capitulo/' + "614006a087ab0f9a98c06e7c");                                         
        console.log("Obtenido capitulo", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Capitulo de Comic " + error);
        return error;
    }
}