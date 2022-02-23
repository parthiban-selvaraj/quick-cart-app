
import React from 'react'
import ButtonContainer from './Styles/ButtonContainer';

const Form = (props) => {
  return ( 
    <form  onSubmit={props.getProductName} style={{marginBottom: "0.5rem"}}> 
        <input className='form__input' 
        type={"text"} 
        name={"productName"}
        placeholder={"jewelery"}
        required
        autoFocus
        autoComplete='on'
        />
        <button className='form__button'>Search</button> 
        {/* <ButtonContainer>Search</ButtonContainer> */}
    </form>
  )
}

export default Form;