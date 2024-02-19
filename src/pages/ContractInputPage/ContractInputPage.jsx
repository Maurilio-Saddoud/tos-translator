import React from 'react'
import "./styles.css"
import ContractInputContainer from '../../containers/ContractInputContainer'

const ContractInputPage = ({setContract}) => {
  return (
    <div className='contract-input-page-container'>
        <ContractInputContainer setContract={setContract} />
    </div>
  )
}

export default ContractInputPage