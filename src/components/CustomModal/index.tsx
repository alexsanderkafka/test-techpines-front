import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GenericButton from "../GenericButton";
import { FormEmailContainer } from "./style";
import { useState } from "react";
import CodeField from "../CodeField";
import { type Message } from "../../types/message";
import { loginService, verifyCodeService } from "../../service/authService";
import type AlertState from "../../types/alertState";
import { saveNewMusicService } from "../../service/musicService";
import { ClipLoader } from "react-spinners";

interface CustomModalProps{
    open: boolean;
    closeModal: () => void;
    setAlertState: (alertState: AlertState) => void;
    url: string;
}
export default function CustomModal({open, closeModal, setAlertState, url}: CustomModalProps){

    const [codeForm, setCodeForm] = useState<any>({
        fisrtCode: '',
        secondCode: '',
        thirdCode: '',
        fourthCode: '',
        fifthCode: ''
    });


    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState("");
    const [emailForm, setEmailForm] = useState<boolean>(true);

    const [loading, setLoading] = useState<boolean>(false);

    async function onSubmitLogin(){
            setLoading(true);
    
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
            if (!email) {
                setEmailError("O e-mail é obrigatório.");
                return;
            }
    
            if (!emailRegex.test(email)) {
                setEmailError("Digite um e-mail válido.");
                return;
            }
    
            setEmailError("");
    
            //Chamar api para enviar o código via email
            //Somente ativar o campo dos códigos se houver um 200 ok da api
    
            const response: Message = await loginService(email);
    
            if(response.isError){
                closeModal();
                cleanFields();

                setAlertState({
                    message: response.message,
                    isVisible: true,
                    isError: true,
                });

                console.log(response.message);
    
                return;    
            }
            
            setEmailForm(false);
            setLoading(false);
    }

    async function onSubmitCode(){
        setLoading(true);
        const code = codeForm.fisrtCode + codeForm.secondCode + codeForm.thirdCode + codeForm.fourthCode + codeForm.fifthCode;
    
        const response: any = await verifyCodeService(email, code);
    
        if(response.isError){
            console.log('Caindo em error');

            closeModal();
            cleanFields();
    
            setAlertState({
                message: response.message,
                isVisible: true,
                isError: true,
            });

            return;
        }

        console.log(response);
    
        const tokenJwt: string = response.token;
    
        const currentResponse: Message = await saveNewMusicService(url, tokenJwt);
    
        if(currentResponse.isError){
            closeModal();
            cleanFields();

            setAlertState({
                message: currentResponse.message,
                isVisible: true,
                isError: false,
            });
                
            return;
        }
    
        closeModal();
        cleanFields();

        setAlertState({
            message: "Salvo com sucesso!",
            isVisible: true,
            isError: false,
        });
    }

    function cleanFields(){
        setLoading(false);
        setEmail("")
        setEmailError("")
        setEmailForm(true)
        setCodeForm({
            fisrtCode: '',
            secondCode: '',
            thirdCode: '',
            fourthCode: '',
            fifthCode: ''
        })
    }

    function handleChangeCode(field: string, value: string){
        setCodeForm((prev: any) => ({
            ...prev,
            [field]: value,
        }));
    }
    
    return(
        <Modal open={open}>
            <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "white",
                p: 3,
                borderRadius: 5,
                boxShadow: 24,
                minWidth: 700,
                minHeight: 300
            }}
            >
                <IconButton
                onClick={closeModal}
                sx={{ mt: 2 }}
                >
                    <CloseIcon/>
                </IconButton>

                {
                    loading ? (
                        <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                        >
                            <ClipLoader
                            color={"#8B4513"}
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                        </div>
                    ) : (
                        emailForm ? (
                        <FormEmailContainer>
                            <label
                                style={{
                                    color: emailError && 'red'
                                }}
                            >{emailError ? emailError : "Digite seu e-mail para realizar o login"}</label>
                            <input 
                            style={{
                                borderColor: emailError && 'red'
                            }}
                            type="email" placeholder="Digite seu melhor e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                <GenericButton onClick={onSubmitLogin} text="Login"/>
                        </FormEmailContainer>
                        ) : (
                            <CodeField email={email} onSubmitCode={onSubmitCode} codeForm={codeForm} handleChange={handleChangeCode}/>
                        )
                    )
                }
            </Box>
        </Modal>
    );
}