import React,{Component} from 'react'
import { useState } from 'react';
import ModalHoc from '../../HOC/ModalHoc'
import Home from '../Home/Home';
import Login from '../Login/Login'

// const LoginHocModal =  ModalHoc(Login);
// const HomeModal = ModalHoc(Home);
export default class DemoModalHoc extends Component {
    state = {
        component: Login
    }
  render() {
    const ModalComponent = ModalHoc(this.state.component);
    return (
        <div className='container'>
                <h3>Demo hoc modal</h3>
        
                <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalId" onClick={async ()=>{
                   await this.setState({
                        component:Login
                    });
                }}> Login </button>
        
        
                <button className='btn btn-success mx-2'  data-bs-toggle="modal" data-bs-target="#modalId" onClick={async ()=>{
                    await this.setState({
                        component:Home
                    });
        
                }}> Home </button>
        
                <ModalComponent />
            
            </div>
    )
  }
}





// const DemoModalHoc = (props) => {

//     const [com,setCom] = useState((props)=>{return <div>Default</div>});

//     const ModalComponent = ModalHoc(com);

//   return (
//     <div className='container'>
//         <h3>Demo hoc modal</h3>

//         <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
//             setCom(Login);
//         }}> Login </button>


//         <button className='btn btn-success mx-2'  data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
//             setCom(Home);

//         }}> Home </button>

//         <ModalComponent />
    
//     </div>
//   )
// }

// export default DemoModalHoc