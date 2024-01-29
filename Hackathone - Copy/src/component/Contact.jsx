import React from 'react'

function Contact() {
  return (
    <>
    <form style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center',fontSize:40,color:'white' }}>Contact Us</h1>
      <input type='text' name='First name' id='' placeholder='John' />
      <input type='text' name=' Last name' id='' placeholder='Doe' />
      <input type='email' name='email' id='' placeholder='john.doe@example.com' />
      <input type='phone' name='phone' id='' placeholder='+01 123456790' />
      <textarea name='message' id='' cols='40' rows='10' placeholder='Enter Your message' />
      <div style={{display:'flex',justifyContent:'center',alignItems:"center",marginTop:10}}>
      <button className='btn'>Send</button>

      </div>
    </form>
  </>
  
  )
}

export default Contact