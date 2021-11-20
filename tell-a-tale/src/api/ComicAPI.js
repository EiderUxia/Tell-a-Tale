import { axiosBase as axios } from "./Config";


export const GetComicById = async () => {
    try{
        const response = await axios.get('/comic/' + "614000cbdaea07194602c6bd");                                         
        console.log("Obtenido comic", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Comic" + error);
        return error;
    }
}

//quite token
export const GetAll = async () => {
    try{
        const response = await axios.get('/comic');                                         //se tiene que especificar que tipo de token es, en este caso Bearer
        console.log("ObtenerTodosLosComics", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU" + error);
        return error;
    }
}

export const CreateComic = async (comic) => {
    try{
        const response = await axios.post("/comic", comic, {
            //request configuration 
        })
        console.log("Crear comic ", response);
    }
    catch(error){
        console.error("NOOOOOOOOOOOOOOOOOOOOOOOOO Error de creacion de comic! " + error);
        return error;
    }
}