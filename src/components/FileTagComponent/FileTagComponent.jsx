import React from 'react'
import "./styles.css"
import { IoClose } from "react-icons/io5";


const FileTagComponent = ({fileName, cancelFile}) => {
  return (
    <div className='file-tag-container' data-aos="fade-right">
        <p className='file-name'>{fileName}</p>
        <IoClose className='close-icon' onClick={cancelFile} />
    </div>
  )
}

export default FileTagComponent