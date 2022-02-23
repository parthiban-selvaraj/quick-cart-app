import React from 'react'
import { Link } from 'react-router-dom'
import ButtonContainer from './Styles/ButtonContainer'

const About = () => {
  return (
    <>
    
    <div className='mt-5 text-muted lead' style={{textAlign : "center"}}>
      <h2><u>Welcome to Quick Cart Application</u></h2><br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis imperdiet quam, sit amet ultricies odio luctus rhoncus. Suspendisse sit amet tristique ligula. Fusce tincidunt, turpis quis aliquam egestas, risus dui condimentum eros, sit amet commodo dui diam ac mi. Donec lobortis rhoncus libero, non faucibus nibh egestas eget. Etiam porta est id enim consequat, in commodo enim facilisis. Duis bibendum non turpis eget fringilla. Phasellus a scelerisque nibh. Donec mauris risus, accumsan in lacinia vitae, pulvinar eu est. Donec dignissim nisl in magna posuere suscipit. Donec bibendum nisl mollis magna ullamcorper porta. In convallis porttitor auctor. Nunc vitae dolor purus. Praesent urna lorem, imperdiet at suscipit quis, dignissim vel nunc. In euismod sapien risus, eget maximus enim lobortis sed.

Duis turpis urna, volutpat at nulla vel, consequat efficitur sem. Pellentesque ac sodales nunc. Maecenas non elementum orci, quis dictum turpis. In ultricies risus in pretium rutrum. Nam nisi augue, tristique at mauris quis, vulputate fringilla augue. Nam vitae vestibulum dui. Pellentesque tempor, magna id ullamcorper ultricies, mauris diam aliquet sem, et venenatis libero enim nec velit. Maecenas et purus sit amet nunc convallis facilisis a in arcu. Vestibulum eu enim justo. Morbi libero dolor, volutpat accumsan ligula sit amet, blandit pretium tortor. Nulla non mi tortor</p>
    </div>
    <div style={{textAlign : "center"}}>
    <Link to={"/"}>
    <ButtonContainer>take me to products</ButtonContainer>
    </Link>
    </div>
    </>
  )
}

export default About