import React, { useMemo, useState ,useEffect} from 'react'
import SkillMemo from './SkillMemo';
const MyTodos = () => {
    const [todo,setTodo]=useState(["New Todo"]);
    const [count,setCount]=useState(0);

    // const useEffect(()=>{
    //     const addTodo=()=>{
    //         console.log("addtodo")
    //         setTodo([...todo,"New Todo"])
    //     }
    // },[todo])
    const addTodo=()=>{
        console.log("addtodo")
        setTodo([...todo,"New Todo"])
    }
    console.log(count);

    const expensiveFunction=(num)=>{
       for(let i=0;i<=10000;i++){
        num+=i
       }
       console.log("expense")
       return num
    }
    
    const increment=()=>{
        setCount(count+1)
    }
    const expense=useMemo(()=>{
        console.log("expense")
       return expensiveFunction(count)
    },[count])
    
  return (
    <div>
        <div>
            <h1>My Todos</h1>
            {
                todo.map((item,index)=> <div key={index}>{item}</div> )
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <hr />
        <div>
            count : -{count} <button onClick={increment}>+</button>
        </div>
        <hr />
        <hr />
        <div>
         <h2>expensive calculation</h2>
         <p>{expense}</p>
        </div>
        <hr />
        <hr />
         <SkillMemo/>
    </div>
  )
}

export default MyTodos