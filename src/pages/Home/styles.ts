
import styled from "styled-components";
import BackgroundImage from "../../assets/background.jpg";

export const Body = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
`

export const Header = styled.header`
    position: relative;
    color: white;
    text-align: center;
    padding: 2rem 1rem;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right, rgba(139, 69, 19, 0.9), rgba(210, 105, 30, 0.85));
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }

    h1{
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        margin-bottom: 0.5rem;
    }

    h2{
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        margin-top: 0;
        opacity: 0.9;
    }

    @media (max-width: 600px) {
        padding: 1.5rem 1rem;
    }   
`

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
`

export const MusicCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
    }

    @media (max-width: 600px) {
        padding: 1rem;
        flex-wrap: wrap;
    }
`

export const Rank = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #8B4513;
    margin-right: 1.5rem;
    min-width: 40px;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        min-width: 30px;
    }
`

export const MusicInfo = styled.div`
    flex-grow: 1;
`

export const MusicTitle = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
        font-size: 1.1rem;
    }
`

export const Views = styled.p`
    color: #666;
    font-size: 0.9rem;
`

export const ArtistImg = styled.img`
     width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto 2rem;
    display: block;
    border: 4px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);

    @media (max-width: 600px) {
        width: 150px;
        height: 150px;
        margin-bottom: 1.5rem;
    }
`

export const Thumbnail = styled.img`
    width: 120px;
    height: 68px;
    border-radius: 4px;
    margin-left: 1rem;
    object-fit: cover;

     @media (max-width: 600px) {
        width: 100%;
        height: auto;
        margin: 1rem 0 0 0;
    }
`

export const SubmitForm = styled.div`
    background: white;
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    h3{
        color: #8B4513;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    input{
        flex-grow: 1;
        padding: 0.8rem;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
    }

    input:focus{
        border-color: #8B4513;
    }
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const SubmitButton = styled.button`
    background: #8B4513;
    color: white;
    border: none;
    padding: 13px 24px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;

    gap: 1rem;

    &:hover{
        background: #D2691E;
    }

     @media (max-width: 600px) {
        width: 100%;
    }
`

export const SectionTitle = styled.h3`
    color: #8B4513;
    margin-bottom: 1rem;
`

export const EmptyState = styled.div`
    background: white;
    border-radius: 8px;
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

export const EmptyStateIcon = styled.div`
    font-size: 3rem;
    color: #8B4513;
    margin-bottom: 1rem;
`

export const EmptyStateText = styled.p`
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
`

export const EmptyStateSubText = styled.p`
     color: #888;
    font-size: 0.9rem;
`

export const MusicCardLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;

    &:hover ${MusicCard}{
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    &:active ${MusicCard}{
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    &:hover ${MusicTitle} {
        color: #8b4513;
    }

    @media (max-width: 600px) {
        font-size: 1.1rem;
    }
        
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    label{
        margin-bottom: 5px;
    }
`

export const FormEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-seri;

    input{
        flex-grow: 1;
        padding: 0.8rem;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
        width: 70%;
        margin-top: 2px;
        border-color: #8B4513;
    }
`

export const GenericButton = styled.button`
    background: #8B4513;
    color: white;
    border: none;
    padding: 13px 24px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    min-width: 200px;

    margin-top: 10px;
    &:hover{
        background: #D2691E;
    }
`

export const OtherMusicCard = styled.div`
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 100px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;

    @media (max-width: 600px) {
        padding: 1rem;
        flex-wrap: wrap;
    }
`

export const OtherMusicInfos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const NavigationMusic = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`

export const LoadinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`