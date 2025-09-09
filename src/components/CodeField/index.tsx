import { Wrapper, InputsRow, CodeInputBox } from "./style";
import GenericButton from "../GenericButton";

interface CodeFieldProps{
    email: string,
    onSubmitCode: () => {},
    codeForm: any,
    handleChange: (field: string, value: string) => void
}

export default function CodeField({email, onSubmitCode, codeForm, handleChange}: CodeFieldProps){
    const fields = Object.keys(codeForm) as (keyof typeof codeForm)[];

    return(
        <Wrapper>
            <p>Digite o código enviado para o e-mail: {email}</p>

            <InputsRow>
                {fields.map((field: any, index: number) => (
                <CodeInputBox
                    key={index}
                    type="text"
                    placeholder="0"
                    value={codeForm[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    maxLength={1}
                />
                ))}
            </InputsRow>

            <GenericButton text="Verificar código" onClick={onSubmitCode}/>
        </Wrapper>
    )
}