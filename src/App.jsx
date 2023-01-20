import { Horse, PlusCircle, CheckCircle, Circle, Trash, IconContext } from "phosphor-react";
import React, { useState } from "react";
import { ContainerT,ContainerIcon2,Text2Task,TextTask,ContainerTask,Span2,Contador,Span1,ContainerContador,ContainerList, ContainerIcon, Container, HeaderContainer, HeaderImg, LogoEnd, LogoIn, Paragy,FormContainer,InputForm,ButtonForm,ButtonFormSvg } from './styles'

import {} from './global.css'

import rocket_logo from './assets/rocket.svg'
import Clipboard from './assets/clipboard.svg'



export function Header(){
    return(
       <HeaderContainer>
       <HeaderImg>
            <img src={rocket_logo} alt="" />
        </HeaderImg>
        <LogoIn>to</LogoIn>
        <LogoEnd>do</LogoEnd>

       </HeaderContainer>
    )
}

export function Assignment(){   
  
  const [tarefa, setTarefa] = useState([]);
  const [count, setCount] = useState (0);
  const [tarefaFeita, setTarefaFeita] = useState(0)


  function AA(){
    event.preventDefault()
     let b = (event.target.ap.value);
 
    setTarefa(state => [...tarefa, b])
    setCount(count + 1)
    document.getElementById('form').reset();

  }

  function handleDelete(task){
    setTarefa(task)
    setCount(count - 1)
   
  }

  function handleComply(tarefaFeita){
    setTarefaFeita(tarefaFeita)
  }


  return(     
  <>
    <FormContainer id='form' onSubmit={AA} action="">
      <InputForm name="ap" type="text"  />
      <ButtonForm type="submit">
        Criar
        <ButtonFormSvg>
          <PlusCircle size={18}/>
        </ButtonFormSvg>
      </ButtonForm>
    </FormContainer>
    <List_Assignment count={count} tarefaFeita={tarefaFeita}/>
     {tarefa.map(tt => {return(
  
    <Task_List key={tt} tarefa = {tarefa} tarefaFeita = {tarefaFeita} handleComply={handleComply} count={count}  task = {tt} handleDelete={handleDelete}/>
    )})}
             
  </>
)
}

export function List_Assignment({count, tarefaFeita}){
  
  function CondContador(){
    if(count == 0){
      return(
        <Contador>{count}</Contador>
      )
    }else{
      return(

        <Contador>{tarefaFeita} de {count} </Contador>
      )
    }
  }
  
  
  return(
    <>
    <ContainerContador>
      <Span1>
        Tarefas criadas
        <Contador>{count}</Contador>
      </Span1>
      <Span2> 
        Concluídas
        <CondContador/>
      </Span2>
    </ContainerContador>
    <Task count={count}/>
    </>
  )
}

export function Task_List({task, count, tarefaFeita, tarefa, handleDelete, handleComply}){
  
  const [variant, setVariant] = useState(false)


  function Del(){
    event.preventDefault()
    let AA = tarefa.filter(tarefa => {return tarefa !== task})
    handleDelete(AA)
    if(variant == true){
      handleComply(tarefaFeita - 1)
    }
  }

  function TextDec(){
    if (variant==false){
      setVariant(true)
      handleComply(tarefaFeita + 1)
    }
    else{

      setVariant(false)
      handleComply(tarefaFeita - 1)
    }
   
  }

  function CircleFinally(){

    if(variant == false){
      return(
        <Circle  onClick={TextDec}  size={24}/>
      )
    }
    else{
      return(

        <CheckCircle onClick={TextDec}  color='#5E60CE' weight='fill' size={24}/>
      )
    }
  }

 

  return(
      <>
          <ContainerList>
            <ContainerT>
            <ContainerIcon variant = {variant}>
               <CircleFinally variant= {variant}/>
            </ContainerIcon>
            <Paragy variant = {variant}>{task}</Paragy>
            </ContainerT>
              <ContainerIcon2>
              <Trash onClick={Del} size={24}/>
            </ContainerIcon2>
          </ContainerList>
     </>
  )
}

export function Task({count}){

  if (count == 0){
    return(
        
        <ContainerTask>
            <img src={Clipboard} alt="" />
            <TextTask>Você ainda não tem tarefas cadastradas</TextTask>
            <Text2Task>Crie tarefas e organize seus itens a fazer</Text2Task>
        </ContainerTask>
    )
  }
}


export function Lista({task, count, tarefaFeita, tarefa, handleDelete, handleComply}){

  const [variant, setVariant] = useState(false)
  

  function Del(){
    event.preventDefault()
    let AA = tarefa.filter(tarefa => {return tarefa !== task})
    handleDelete(AA)
  }


  function TextDec(){
    if (variant==false){
      setVariant(true)
      handleComply(tarefaFeita + 1)
    }
    else{

      setVariant(false)
      handleComply(tarefaFeita - 1)
    }
   
  }


  return(
    <Container>
    <TarefasFeitas tarefaFeita={tarefaFeita} count={count}/>
    <Paragy variant = {variant}>sddds</Paragy>
    <p > {task}</p>
    <Horse onClick={TextDec} size={20}/>
    <button onClick={Del}>Delete</button>
    </Container>
  )
}


export function App(){
  return(
    <>
   <Header/>
   <Assignment/>

    </>
  )
}
