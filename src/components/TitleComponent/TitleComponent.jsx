import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'

const TitleComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='title-component'>
        <p onClick={() => navigate("/")} className='title-text'>TOS Translator</p>
    </div>
  )
}

export default TitleComponent