import React,{useEffect, useState} from 'react'
import '../css-style/Codes.css';
import copyImage from '../images/copy.png';
import leetcode from '../images/leetcode.png'
export default function Codes() {

  const handleCopy = (copyText)=>{
    try{
      navigator.clipboard.writeText(copyText);
      console.log('text copied');
    }
    catch(e){
      console.log('error to copy text');
    }
  }
  const [data, setData] = useState([]);
  const getUsers = async ()=>{
    const response = await fetch('/getQuestions',{
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
                      <div class="box">
                      <abbr title="copy"><img id='copy-to-clipboard' src={copyImage} alt="copy.png" onClick={()=>handleCopy(doc.code)}/></abbr>
                      <div id='code'><code><pre>{doc.code}</pre></code></div>
                      </div>
                      </>
                    ))}
                </div>
            </div>
  )
}
