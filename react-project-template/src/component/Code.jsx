import '../prism.css';
import '../Style.css';
import Highlight, { defaultProps } from "prism-react-renderer";
import Demo from "prism-react-renderer/themes/synthwave84";
import styled from "styled-components";



const Code = () => {
  // insert your code here
  const exampleCode = `
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
       setText('your REWIND is'+ arrayOfResult)
       setInputAdded(true)
      }
    return ( <>
      <div className="container ">
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
            inputAdded?<Alert text={text}/>:null
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
     `.trim();

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  color:white
`;

const LineContent = styled.span`
  display: table-cell;
`;
  return ( <>
   <div className="container py-3 px-5 ">
     <h3 className="border-1 border-bottom border-dark pb-3 text-end">the code of rewind</h3>
     <div className="row row-cols-1 row-cols-sm-2">
       <div className="col-sm-8">
          
        <Highlight 
        {...defaultProps}  
        theme={Demo}
        code={exampleCode} 
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
          
       </div>
       <div className="col-sm-4 order-sm-last order-first">
           <div className="row">
             <div className="col">
               <h5>step0</h5>
               <p>building UI and adding event handler in input and button</p>
             </div>
           </div>
           <div className="row">
             <div className="col">
               <h5>step1</h5>
               <p>using useState inorder to create changable variables and saving the changes that client made in state</p>
             </div>
           </div>
            <div className="row mt-sm-5">
             <div className="col mt-sm-5 ">
               <h5>step2</h5>
               <p>generating REWIND with the help of for loop</p>
             </div>
           </div>
           <div className="row mt-sm-5 mb-sm-5 py-sm-5">
             <div className="col mt-sm-5 mb-sm-5 py-sm-5">
             </div>
           </div>
           <div className="row mt-sm-2 mb-sm-2 py-sm-2">
             <div className="col mt-sm-2 mb-sm-2 py-sm-2">
             </div>
           </div>
           <div className="row mt-sm-5 mb-sm-5">
             <div className="col mt-sm-5 mb-sm-5">
               <h5 className='mt-sm-5'>step3</h5>
               <p>hiding and showing the result section</p>
             </div>
           </div>
           <div className="row mt-sm-5">
             <div className="col mt-sm-5 ">
               <h5 className='mt-sm-5'>step4</h5>
               <p>creating the content of result section</p>
             </div>
           </div>
           
           
       </div>
     </div>
   </div>
  </> );
}
 
export default Code;



 