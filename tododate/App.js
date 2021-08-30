import React,{useState} from 'react'
import {format} from 'date-fns'



function App() {

  const [state,setState]=useState('')
  const [state1,setState1]=useState('')
  const [state2,setState2]=useState('')
  const [item,setItem]=useState([])
  const [clr,setClr]=useState(false)

  const call=(event)=>{
    setState(event.target.value)
    setClr(false)
  }
  const call1=(event)=>{
    setState1(event.target.value)
  }

  const call2=(event)=>{
    setState2(event.target.value)
  }
  const mydata={id:new Date().getTime().toString(),
  task:state,
date:state1,
description:state2}

const write=()=>{
setItem([...item,mydata])
setClr(true)
}
const current=format(new Date(),'yyyy-MM-dd')
if(mydata.date===current)
{alert('due date passed')}

  return (
   <>
   <div>
   <label>enter your task</label>
<input type="text"  onChange={call}/>
</div>

<div>
<label> task Description</label>
<input type="text"  onChange={call2}/>
</div>

<div>
<label>task due date</label>
<input type="date" onChange={call1} />
</div>

<div><button onClick={write}>add</button></div>


<div>
<h1>TO-DO LIST</h1>
</div>


<div>
  {item.map(ele=>{
    return <table>
    <tr><td>{ele.task}</td></tr>
    <tr><td>{ele.description}</td></tr>
    <tr><td>{ele.date}</td></tr>
    </table>
  })}
</div>

   </> 
  );
}

export default App;
