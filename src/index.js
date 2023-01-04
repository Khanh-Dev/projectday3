import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
//import face from './images/face.jpg'

const jsxElement = <h2 className='header_content'>SUBCRIBE</h2>
const jsxContent = <p className='second_content'>Sign up with your email address to receive new and updates</p>
const jsxInput = (
  <form className='css_form'>
    <label className='css_label'>
      <input className='child' type="text" name="name" placeholder='First Name' />
      <input className='child' type="text" name="name" placeholder='Last Name' />
      <input className='child' type="text" name="name" placeholder='Email' />
    </label>

    <br></br>

    <input className='css_input' type="submit" value="Subscribe" />
</form>
)

const jsxRoot = document.getElementById('root')
const app = (
  <div className='app'>
    {jsxElement} {jsxContent} {jsxInput}
  </div>
)

ReactDOM.render(app, jsxRoot)