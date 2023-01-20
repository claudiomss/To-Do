import styled, { css } from "styled-components";

// ------------------Header---------------------

export const HeaderContainer = styled.div`

    background-color: var(--gray-700);
    height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const HeaderImg = styled.div`
   margin-right: 0.75rem;
`

export const LogoIn = styled.div`
       color: var(--blue);
    font-size: 2.5rem;
    font-weight: 900;
`

export const LogoEnd = styled.div`
    color: var(--purple);
    font-size: 2.5rem;
    font-weight: 900;
`

// ------------------FormTarefas---------------------

export const FormContainer = styled.form`
    margin-top: -1.6875rem;
    display: flex;
    justify-content: center;
    
    @media only screen and (max-width: 900px){
    input{
        width: 65%;
    }
}
   
`

export const InputForm = styled.input`
    background-color: var(--gray-500);
    color: var(--gray-300);
    width: 39.875rem;
    height: 3.375rem;
    border: 1px solid var(--gray-700);
    border-radius: 8px;
    padding: 1rem;
    margin-right: 0.5rem;
    outline: 0;
`

export const ButtonForm = styled.button`
    color: var(--gray-100);
    background-color: var(--blue-dark);
    display: flex;
    padding: 1.2rem 0 0 1rem ;
    border-radius: 8px;
    font-size: 0.875rem;
    border: none;
    transition: 0.3s;

    &:hover{
        background-color: var(--blue);
        cursor: pointer;
    }

`

export const ButtonFormSvg = styled.div`
     margin: 0 1rem 0 0.5rem;
`
// ------------------ListaTarefas---------------------

export const ContainerT = styled.div`
  display: flex;
  flex:1;
`

export const ContainerList = styled.div`

    width: 46rem;
    margin: 0.75rem auto;
    border-top: 1px solid var(--gray-400);
    border-radius: 8px;
    padding: 1rem 0;
    background-color: var(--gray-500);
    display: flex;
    color: var(--gray-100);
    font-size: 0.875rem;
 
    @media only screen and (max-width: 900px){
        width: 75%;
    }

`

export const Paragy = styled.div`
    padding-top: 0.15rem;
    color: ${props => props.variant ? '#6d6d6d' : '#c5c5c5' };
    text-decoration : ${props => props.variant ? 'line-through' : 'none'};
    `

    
const Icon = styled.div`
    line-height: 0;
    margin-right: 1rem;
    margin-left: 1rem;
`

export const ContainerIcon = styled(Icon)`
    color: #4EA8DE;

    svg:hover {
        color: #1E6F9F;
        transition: 0.3s;
    }

    svg: {
        color: #1E6F9F;
        color: #9747FF;  
    }
`

export const ContainerIcon2 = styled(Icon)`
    justify-content: flex-end;
    justify-self: end;
    
    color: var(--gray-300);

    svg:hover {
 
        color: var(--danger);
        transition: 0.3s;
        background-color: var(--gray-400);
        padding: 1px;
    }   
`
// ------------------Contadores---------------------


export const ContainerContador = styled.div`
    width: 46rem;
    margin: 4rem auto ;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 900px){
        width: 75%;
    }
`
export const Span1 = styled.div`
    display: flex;
    color: var(--blue);
    font-size: 0.875rem;
    font-weight: 700;
`

export const Contador = styled.div`
    background-color: var(--gray-400);
    color: var(--gray-200);
    margin-left: 0.5rem;
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
    font-size: 0.75rem;
`


export const Span2 = styled.div`
    display: flex;
    color: var(--purple);
    font-size: 0.875rem;
    font-weight: 700;
`

// ------------------Task---------------------


export const ContainerTask = styled.div`
    width: 46rem;
    margin: -2.5rem auto;
    text-align: center;
    border-top: 1px solid var(--gray-400);
    border-radius: 8px;
    padding-top: 4rem;
`

export const TextTask = styled.div`
    display: block;
    color: var(--gray-300);
    font-weight: 700;
    margin-top: 1rem;
`

export const Text2Task = styled.div`
    display: block;
    color: var(--gray-300);
    font-weight: 400;
    line-height: 1.4rem;
`


// ------------------FormTarefas---------------------


export const Container = styled.div`
    display: flex;
    margin-top: 2rem;
    align-items: center;
    gap: 2rem;

    svg:hover {
        color: #c0174f;
    }

    svg: {
        color: blueviolet
    }

    
`

