import React from 'react'


const Inlinestyle=()=> {
    const buttonText1=[3,12,"sujit","click"]
    const buttonText={text: 'submit'}
    const style= {backgroundColor:'green', color:'white'}
   
  return (
    <div>
        <label htmlFor="name" className="label">enter e-mail</label>
        <input id="name" type="text" />
        <button style={{ backgroundColor:'red', color:'white'}}>
        
            {buttonText.text}
         </button>
         <div>
         <label htmlFor="name" className="label">enter e-mail</label>
        <input id="name" type="text" />
         <button style={style}>
        
        {buttonText1}
     </button>
         </div>
    </div>
  )
}

export default Inlinestyle