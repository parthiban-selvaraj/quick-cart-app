
import React from 'react'

const Form = (props) => {
  return ( 
    <form  onSubmit={props.getProductName} style={{marginBottom: "0.5rem"}}> 
        <input className='form__input' 
        type={"text"} 
        name={"productName"}
        placeholder={"jewelery"}
        required
        autoFocus
        autoComplete={'on'}
        list='products'
        />
        <datalist id='products'>
          <option value={"electronics"}/>
          <option value={"jewelery"}/>
          <option value={"men's clothing"}/>
          <option value={"women's clothing"}/>
        </datalist>
        <button className='form__button'>Search</button> 
        {/* <ButtonContainer>Search</ButtonContainer> */}
    </form>
  )
}

export default Form;