import type { Message } from "../types/message";
import type { Token } from "../types/token";
import api from "./api";

export async function loginService(email: string): Promise<any>{

    var currentMessage: Message = {
            message: '',
            isError: true
    }

    try{
        const response: any = await api.post('/login', {
            email: email
        });

        if(response.status === 200){
            currentMessage.message = "Sucesso ao enviar e-mail";
            currentMessage.isError = false;
            return currentMessage;
        }

    }catch(error: any){

        if(error.response.status === 422){
            currentMessage.message = error.response.data.message;

            return currentMessage;
        }   

        currentMessage.message = "Erro desconhecido ao enviar e-mail";
        return currentMessage;
    }
}

export async function verifyCodeService(email: string, code: string): Promise<any>{

    try{
        const response: any = await api.post('/login/verify-code', {
            email: email,
            code: code
        });

        if(response.status === 200){
            const currentToken: Token = response.data;

            return currentToken;
        }
    }catch(error: any){
        var currentMessage: Message = {
                message: '',
                isError: true
        }

        if(error.response.status === 403){
            currentMessage.message = error.response.data.message;
            return currentMessage;
        }

        if(error.response.status === 422){
            currentMessage.message = error.response.data.message;
            return currentMessage;
        }

        return currentMessage.message = "Erro desconhecido ao verificar código";
    }
}


///login/verify-code