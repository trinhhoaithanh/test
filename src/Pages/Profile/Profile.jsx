import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductApi } from '../../redux/reducers/productReducer';
import { getProfileApi } from '../../redux/reducers/userReducer';

const Profile = () => {
  const {userProfile} = useSelector(state => state.userReducer);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    const actionAsync = getProfileApi();
    dispatch(actionAsync);

  },[])



  return (
      <>
      <h3 className='text-white' style={{background: 'linear-gradient(180deg, #F21299 0%, #1B02B5 100%)', width:'698px', height:'74px', lineHeight:'74px', paddingLeft:'25px', marginTop:'44px'}}>Profile</h3>
    	<div className='row mt-5'>
        <div className='col-2'>
          <img src='./img/avatar.png' alt="..." />
        </div>
        <div className='col-5'>
        <div className="form-group mb-3">
            <p className="my-0">Email</p>
            <input
              className="form-control bg-light w-75"
              placeholder="email"
              name="email"
              value={userProfile?.email}
            />
              
          </div>
          <div className="form-group mb-3">
            <p className="my-0">Phone</p>
            <input
              className="form-control bg-light w-75"
              placeholder="phone   "
              name="phone"
              value={userProfile?.phone}
            />
             
          </div>
        </div>
        <div className='col-5'>
        <div className="form-group mb-3">
            <p className="my-0">Name</p>
            <input
              className="form-control bg-light w-75"
              placeholder="name"
              name="name"
              value={userProfile?.name}
            />
             
          </div>
          <div className="form-group mb-3">
            <p className="my-0">Password</p>
            <input
              className="form-control bg-light w-75"
              
              name="password"
              
              // value={userProfile?.password}
            />
             
          </div>
          <div className="row">
            <div className="col-2">
              <span
                style={{
                  height: "30.691450119018555px",
                  width: "59px",
                  left: "762px",
                  top: "456.802978515625px",
                }}
              >
                Gender
              </span>
            </div>
            <div className="col-3">
              <input
                type="radio"
                name="gender"
                value={userProfile?.gender}
                
              />
             
                
               <p>Male</p> 
             
            </div>
            <div className="col-3">
              <input type="radio" name="gender"/>
                <p >Female</p>
              
            </div>
            <div className='col-3'>
              <button className='btn btn-success'>Update</button>
            </div>
          </div>
        </div>
      </div>
      <hr  className='mx-5'/>
      <ul class="nav nav-tabs container">
  <li class="nav-item">
    <a style={{color:'#DD2AED',fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '32px',
lineHeight: '39px'}} class="nav-link active" aria-current="page" href="#">Order history</a>
  </li>
  <li class="nav-item">
    <a style={{ fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '32px',
lineHeight: '39px'}} class="nav-link text-dark" href="#">Favourite</a>
  </li>
 
</ul>
<div className='container my-5'>
  <p style={{color: '#CB0DC3'}}>+ Orders have been placed on 09-19-2020</p>
 
    
<table class="table">
  <thead>
    <tr className='table-secondary'>
      <th scope="col">id</th>
      <th scope="col">img</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">total</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td><img src="./img/product.png" alt="" /></td>
      <td>Product 1</td>
      <td>1000</td>
      <td>1</td>
      <td>1000</td>

    </tr>
    
  </tbody>
</table>
  
  
</div>
<div className='container my-5'>
  <p style={{color: '#CB0DC3'}}>+ Orders have been placed on 09-19-2020</p>
 
    
<table class="table">
  <thead>
    <tr className='table-secondary'>
      <th scope="col">id</th>
      <th scope="col">img</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">total</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td><img src="./img/product.png" alt="" /></td>
      <td>Product 1</td>
      <td>1000</td>
      <td>1</td>
      <td>1000</td>

    </tr>
    
  </tbody>
</table>
  
  
</div>

<div className='container my-5'>
<nav aria-label="Page navigation example text-right">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">...</a></li>
    <li class="page-item"><a class="page-link" href="#">9</a></li>
    <li class="page-item"><a class="page-link" href="#">10</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>

      </>
  )
}

export default Profile