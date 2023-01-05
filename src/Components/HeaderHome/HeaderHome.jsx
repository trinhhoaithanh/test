import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ACCESS_TOKEN, removeStore, USER_LOGIN } from '../../util/config';
const HeaderHome = () => {

    const { userLogin } = useSelector(state => state.userReducer);
    const { carts } = useSelector(state => state.productReducer)
    const renderLoginButton = () => {
        if (userLogin) {
            return <>
                <NavLink to='/carts' className='text-white'>
                    <img src="/img/image 8.png" alt="" /> <span className='text-white'>( {carts?.length})</span>
                </NavLink>
                <NavLink to="/profile" className="nav-link mx-3 text-white">Hello ! {userLogin.email}</NavLink>
                <span style={{ cursor: 'pointer', paddingRight: '15px' }} className="text-white" onClick={() => {
                    removeStore(ACCESS_TOKEN);
                    removeStore(USER_LOGIN);
                    //clear hết tất cả biến trên redux
                    window.location.reload();//f5 reload lại trang
                }}>Logout</span>
            </>
        }
        return <><NavLink to="/login" className="nav-link mx-3 text-white">Login</NavLink>
        <NavLink to="/register" className="nav-link mx-3 text-white">Register</NavLink>
        </>
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/" style={{ marginLeft: '24px' }}>
                    <img src="/img/image 3.png" alt="" />
                </NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/" aria-current="page">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/demo-modal-hoc" aria-current="page">HOC </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/demo-modal-container" aria-current="page">HOC </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        {renderLoginButton()}
                    </form>
                </div>
            </nav>
            <ul className="nav" style={{ marginLeft: '24px' }}>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link mx-3 text-dark">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link mx-3 text-dark">Men</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link mx-3 text-dark">Woman</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link mx-3 text-dark">Kid</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link mx-3 text-dark">Sport</NavLink>
                </li>
            </ul>
        </div>




    )
}

export default HeaderHome