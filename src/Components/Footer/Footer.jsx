import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='container' style={{marginTop:'500px'}}>
        <div className='row'>
            <div className='col-4'>
                <h3>GET HELP</h3>
                <h6>Home</h6>
                <h6>Nike</h6>
                <h6>Adidas</h6>
                <h6>Contact</h6>
            </div>
            <div className='col-4'>
                <h3>SUPPORT</h3>
                <h6>About</h6>
                <h6>Contact</h6>
                <h6>Help</h6>
                <h6>Phone</h6>
            </div>
            <div className='col-4'>
                <h3>REGISTER</h3>
                <h6>register</h6>
                <h6>login</h6>
            </div>
            <div className='col-12' >
                <p style={{background:'#D9D9D9'}}  className='bg-light text-center py-5'>© 2022 Cybersoft All Rights Reserved | Designed Theme by Trương Tấn Khải</p>
            </div>
        </div>
      </div>
    )
  }
}
