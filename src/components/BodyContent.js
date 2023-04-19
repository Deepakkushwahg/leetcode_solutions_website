import React from 'react'
import '../css-style/BodyContent.css';
import Sidebar from './Sidebar';
import Codes from './Codes';

export default function BodyContent() {
  return (
    <div id='body-content'>
        <Sidebar/>
        <Codes/>
    </div>
  )
}
