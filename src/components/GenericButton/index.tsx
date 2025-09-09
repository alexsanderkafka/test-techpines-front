import { Button } from "./style";


interface GenericButtonProps{
    text: string,
    onClick: () => {}
}

export default function GenericButton({text, onClick}: GenericButtonProps){
    return(
        <Button onClick={onClick}>
            {text}
        </Button>
    );
}