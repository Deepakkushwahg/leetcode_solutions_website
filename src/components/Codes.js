import React,{useEffect, useState} from 'react'
import '../css-style/Codes.css';
import leetcode from '../images/leetcode.png'
export default function Codes() {
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
    <div id="codes">
                <div id="leetcode-logo">
                    <img src={leetcode} alt="leetcode.png" width="300px"/>
                    <h1 id='text'>Leetcode Solutions</h1>
                </div><br/><br/>
                <div id='questions'>
                    {data.map(doc => (
                      <>
                      <h1 id={doc.q_no} key={doc._id}>{doc.q_no}. {doc.question}</h1>
                      <div class="box"><code><pre>{doc.code}</pre></code></div>
                      </>
                    ))}
                </div>
            </div>
  )
}
