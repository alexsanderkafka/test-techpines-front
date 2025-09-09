
import { useState, useEffect } from 'react';
import { ArtistImg, Body, Container, EmptyState, EmptyStateIcon, EmptyStateSubText, EmptyStateText, Header, InputBox, InputGroup, LoadinContainer, MusicCard, MusicCardLink, MusicInfo, MusicTitle, NavigationMusic, OtherMusicCard, OtherMusicInfos, Rank, SectionTitle, SubmitButton, SubmitForm, Thumbnail, Views } from './styles';
import Artist from '../../assets/tiao-carreiro-pardinho.png';
import { useForm } from 'react-hook-form';
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Notify from '../../components/Notify';
import type Music from '../../types/music';
import { getTopMusicService, getOtherMusicsService} from '../../service/musicService';
import { ClipLoader } from "react-spinners";
import CustomModal from '../../components/CustomModal';
import type AlertState from '../../types/alertState';

export default function Home(){

    const { register, handleSubmit, formState: {errors} } = useForm();
    const [url, setUrl] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(true);

    const [open, setOpen] = useState(false);

    const [topMusics, setTopMusics] = useState<Music[]>([]);
    const [otherMusic, setOtherMusic] = useState<Music | any>({});
    const [pageNavigation, setPageNavigation] = useState<number>(6);
    const [loadingMoreMusic, setLoadingMoreMusic] = useState<boolean>(false);

    const [alertState, setAlertState] = useState<AlertState>({
        message: "",
        isVisible: false,
        isError: false,
    });

    async function loadMusics(page: number) {

        setLoading(true);

        const [topResponse, otherResponse] = await Promise.all([
            getTopMusicService(),
            getOtherMusicsService(page),
        ]);

        setTopMusics(topResponse);
        setOtherMusic(otherResponse);
    }

    async function getOtherMusics(page: number){
        const response: Music | any = await getOtherMusicsService(page);

        setOtherMusic(response);
    }

    useEffect(() => {
        loadMusics(pageNavigation);
    }, []);

    useEffect(() => {
        setLoadingMoreMusic(false);
    }, [otherMusic])

    useEffect(() => {
        setLoading(false);
    }, [topMusics]);

    useEffect(() => {
        if(!alertState.isVisible && !alertState.isError){
            loadMusics(pageNavigation);
        }
    }, [alertState])

    async function onSubmit ( data: any ){
        console.log(data);

        setOpen(true);
        setUrl(data.url);
    }

    async function forwardMusic(){
        setLoadingMoreMusic(true);

        const newPage = pageNavigation + 1;

        setPageNavigation(newPage);

        await getOtherMusics(newPage);

        setLoadingMoreMusic(false);
    }

    async function backMusic(){
        setLoadingMoreMusic(true);

        if(pageNavigation === 6) return;

        const newPage = pageNavigation - 1
        setPageNavigation(newPage);

        await getOtherMusics(newPage);
    }

    function closeModal(){
        setOpen(false)
    }

    function renderMusicCards(){
        if(topMusics.length === 0){
            return(
                <EmptyState>
                    <EmptyStateIcon>🎵</EmptyStateIcon>
                    <EmptyStateText>Nenhuma música cadastrada ainda</EmptyStateText>
                    <EmptyStateSubText>Seja o primeiro a sugerir uma música usando o formulário acima!</EmptyStateSubText>
                </EmptyState>
            );
        }

        return (
            <>
            <SectionTitle>Ranking Atual</SectionTitle>

            {topMusics.map((item, index) => (
                <MusicCardLink key={index} href={item.youtubeLink} rel="noopener noreferrer" target="_blank">
                    <MusicCard>
                        <Rank>{index + 1}</Rank>

                        <MusicInfo>
                            <MusicTitle>{item.title}</MusicTitle>
                            <Views>{item.views.toLocaleString('pt-BR')} visualizações</Views>
                        </MusicInfo>

                        <Thumbnail src={item.thumb} alt="Capa da música"/>
                    </MusicCard>
                </MusicCardLink>
            ))}

            <OtherMusicCard>
                {
                    otherMusic.length > 0 && !loadingMoreMusic ? (
                        otherMusic.map((item: any) => (
                            <>
                                <OtherMusicInfos>
                                    <Rank>{pageNavigation}</Rank>
                                        <MusicInfo>
                                           <MusicTitle>{item.title}</MusicTitle>
                                        <Views>{item.views.toLocaleString('pt-BR')} visualizações</Views>
                                    </MusicInfo>

                                    <Thumbnail src={item.thumb} alt="Capa da música"/>
                                </OtherMusicInfos>
                            </>
                            ))
                            ) : (
                                    <EmptyStateText>Não possível encontrar mais músicas</EmptyStateText>
                                )
                            }

                            <NavigationMusic>
                                <IconButton
                                sx={{
                                    color: '#8B4513',
                                    transition: 'background-color 0.2s',
                                    '&:hover': {
                                         color: '#D2691E'
                                    }
                                }}
                                onClick={backMusic}
                                >
                                    <ArrowBackIosIcon/>
                                </IconButton>

                                <IconButton
                                sx={{
                                    color: '#8B4513',
                                    transition: 'background-color 0.2s',
                                    '&:hover': {
                                        color: '#D2691E'
                                    }
                                }}
                                onClick={forwardMusic}
                                >
                                    <ArrowForwardIosIcon/>
                                </IconButton>
                            </NavigationMusic>
                            
            </OtherMusicCard>
            </>
        );
    }

    return(
        <Body>
            <Header>
                <ArtistImg src={Artist} alt="Capa do artista" />
                <h1>Top 5 Músicas Mais Tocadas</h1>
                <h2>Tião Carreiro & Pardinho</h2>
            </Header>

            <Container>

                {
                    alertState.isVisible && (
                        <Notify text={alertState.message} isError={alertState.isError} setAlert={setAlertState}/>
                    )
                }

                <SubmitForm>
                    <h3>Sugerir Nova Música</h3>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                            <InputBox>
                                <label
                                    style={{
                                        color: errors.url && 'red'
                                    }}
                                >{errors.url ? errors.url.message?.toString() : ""}</label>

                                <InputGroup>
                                    <input placeholder="Cole aqui o link do YouTube"
                                    {...register('url', {required: "Por favor, digite o link do YouTube!"})}
                                    
                                    style={{
                                        borderColor: errors.url &&   'red'
                                    }}
                                    />

                                    <SubmitButton>Enviar Link</SubmitButton>
                                </InputGroup>
                            </InputBox>
                    </form>

                </SubmitForm>

                {
                    loading ? (
                        <LoadinContainer>
                            <ClipLoader
                            color={"#8B4513"}
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                        </LoadinContainer>
                    ) : (
                        renderMusicCards()
                    )
                }

            </Container>
            
            <CustomModal open={open} closeModal={closeModal} setAlertState={setAlertState} url={url}/>
            
        </Body>
    );
}