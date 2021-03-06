import Logo from '../img/rewind.png'
import LogoGa from '../img/gatsby.svg'
import LogoRe from '../img/redux.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import '../Style.css';
import {useHistory} from 'react-router-dom'




const Home = () => {
  const history=useHistory()

  const clickH=()=>{
    history.push('/App')
  }
  return ( <>
   <div className="container">
     <div className="row row-cols-1 row-cols-sm-2">
      {/* room for explanation about the app */}
     <div className="col order-last order-sm-first">
      <h2 className="fw-bold lh-1 mb-3">project name: rewind</h2>
      <p className="lead">it is a React coding exercise using arrays.it gets a string from user and displays it in Reverse.</p>
      <ul className="fa-ul pt-2 checklist">
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React useState hooks</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>text</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>text</li>
      </ul>
      <button className="btn mt-3 btn-outline-dark btn-lg px-4 me-md-2" onClick={clickH}>try it out...</button>
      <h5 className="fw-bold mt-5">
        <div className="d-flex">
          <div className="row gx-3">
          <div className="col">
            <li style={{color:' #61dbfb'}}className="fab fa-react fa-4x"></li></div>
            <div className="col"><li style={{color:'#264de4'}}className="fab fa-css3-alt fa-4x"></li></div>
            <div className="col"><li style={{color:'#e34c26'}}className="fab fa-html5 fa-4x"></li></div>
            <div className="col"><li style={{color:'#563d7c'}}className="fab fa-bootstrap fa-4x"></li></div>
            </div>
            </div>
      </h5>
     </div>
     {/* room for the logo */}
     <div className="col d-flex align-items-center">
        <img src={Logo}  className='img-fluid center-block d-block mx-auto '/>
     </div>
     </div>
    
   </div>

</>);
}
 
export default Home;