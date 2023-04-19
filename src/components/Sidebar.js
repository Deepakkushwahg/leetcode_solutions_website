import React,{useEffect, useState} from 'react'
import '../css-style/Sidebar.css';
export default function Sidebar() {
  const [data, setData] = useState([]);
  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/getQuestions',{
      method:'GET',
    })
   const data = await response.json();
   setData(data);
  }

  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div id="sidebar">
        <ul>
            <li><h2>Problems -</h2></li>
            <ul id="questions-no">
                {data.map(doc => (
                    <li><a href={"#"+doc.q_no} key={doc._id}>{doc.q_no}. {doc.question}</a></li>        
                ))}
            </ul>
        </ul>
    </div>
  )
}
