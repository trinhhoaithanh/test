import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ContainerModal from '../../HOC/ContainerModal'
import Login from '../../Pages/Login/Login'
import { setModalContentAction } from '../../redux/reducers/modalReducer'
import Home from '../Home/Home'
const DemoContainerComponent = () => {
    const [component, setComponent] = useState(<div>default</div>);

    const dispatch = useDispatch();


    return (
        <div className='container'>
            <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-success' onClick={() => {
                // setComponent(<Login />)
                const action = setModalContentAction(<Login />);
                dispatch(action)
            }}>Login</button>

            <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-success' onClick={() => {
                      const action = setModalContentAction(<Home />);
                      dispatch(action);
                // setComponent(<Home />)
            }}>Home</button>
            {/* <ContainerModal title={'Default'} component={component} /> */}
        </div>
    )
}

export default DemoContainerComponent


{/*
 <div>default</div>: Thẻ thì là jsx.element
    (props) => {return <div>default</div>}: React.FC
*/}