
import type { Message } from "../types/message";
import type Music from "../types/music"
import api from "./api";

export async function getTopMusicService(): Promise<Music[]>{
    const response: any = await api.get('/musics/top');

    if(response.status === 200){
        const music: Music[] = response.data;
        return music;
    }else{
        return []
    }
}

export async function getOtherMusicsService(page: number): Promise<Music | any>{
    const response: any = await api.get(`/musics?page=${page}`);

    if(response.status === 200){
        const music: Music = response.data.data;
        return music;
    }
}

export async function saveNewMusicService(url: string, token: string): Promise<Message>{
    const data = {
        url: url
    }

    console.log(token);

    const response = await api.post('/musics', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    var currentMessage: Message = {
            message: '',
            isError: true
    }

    if(response.status === 201){
        currentMessage.message = "Música cadastrada com sucesso!";
        currentMessage.isError = false;
        return currentMessage;            
    }

    if(response.status === 406){
        currentMessage.message = response.data.message;
        return currentMessage;
    }

    if(response.status === 404){
        currentMessage.message = response.data.message;
        return currentMessage;
    }

    currentMessage.message = "Erro desconhecido ao cadastrar música";
    return currentMessage;
}