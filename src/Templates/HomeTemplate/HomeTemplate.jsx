
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../../Components/HeaderHome/HeaderHome'
import ContainerModal from '../../HOC/ContainerModal'
import Footer from '../../Components/Footer/Footer'

export const HomeTemplate = () => {
    return (
        <>
            <HeaderHome />
            <div >
                {/* Outlet sẽ là nơi chứa nội dung các component Pages */}
                <Outlet />
            </div>
           
                <Footer/>
            
            
            {/* <ContainerModal /> */}
        </>
    )
}
