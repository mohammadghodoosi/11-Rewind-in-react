import { useState } from 'react'
import '../Style.css'
const Application = () => {
  //STEP 1
  const[change,setChange]=useState([])
  const[text,setText]=useState('')
  const[inputAdded,setInputAdded]=useState(false)

  const handleChange=(e)=>{
    setChange(e.target.value)
  }

  //STEP 2
  const handleClick=()=>{
     let varChange=change
     let lengthVarChange=varChange.length-1
     let arrayOfResult=[]
     for(lengthVarChange;lengthVarChange>=0;lengthVarChange--){
          arrayOfResult+=varChange[lengthVarChange]
     }
     setText(`your REWIND is  "${arrayOfResult}"`)
     setInputAdded(true)
    }
  return ( <>
    <div className="container mt-5 py-5 px-5">
      <div className="row inputSection border border-2 border-dark px-5 py-3">
        <div className="col-12">
          <h4 className='pb-2 border-bottom border-2 text-center'>enter a word or phrase</h4>
        </div>
        <div className="col-9 mb-4 mt-4">
          <input type="text" className="form-control" onChange={handleChange}/>
        </div>
        <div className="col-3 mb-4 mt-4">
          <button className="btn px-5 " onClick={handleClick}>REWIND it...</button>
        </div>
      </div>
      <div >
        {
          //STEP3
          inputAdded&&<Alert text={text}/>
        }
      </div>
    </div>

  </> );
}

//STEP 4
const Alert=(props)=>{
  return(
   <div className="row alertResult mt-5 px-5 py-3 border border-2 border-dark">
      <h5 className="col-12 border-bottom border-2 pb-2">
        well done!
      </h5>
      <div className="col-12 ">{props.text}</div>
   </div>
  )
}
 
export default Application;