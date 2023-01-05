import React from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerApi } from "../../redux/reducers/userReducer";
import { history } from "../../index";
import { http } from "../../util/config";
const Register = () => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues:{
      email:'',
      password:'',
      name:'',
      phone:'',
      gender:true
    },
    onSubmit:(values)=>{
     const actionAsync = registerApi(values);
      dispatch(actionAsync);
     
    
    // console.log(values);
    },
    validationSchema:yup.object().shape({
      email:yup.string().required('Email cannot be blank').email('Email is invalid')
      ,password:yup.string().required('Password cannot be blank'),name:yup.string().required('Name cannot be blank')
      ,phone:yup.string().required('Phone cannot be blank').matches(/^[0-9]+$/),
    }
    )
  })
  return (
    



    <form className="container"onSubmit={form.handleSubmit}>
      <h3>Register</h3> 
      <hr />
      <div className="row">
        <div className="col-6">
          <div className="form-group mb-3">
            <label className="my-0">Email</label>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="email"
              name="email"
            />
             {form.errors.email&&<p className='text-danger'>{form.errors.email}</p>}
          </div>
          <div className="form-group mb-3">
            <label className="my-0">Password</label>
            <input  type='password' onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="password"
              name="password"
            />
             {form.errors.password&&<p className='text-danger'>{form.errors.password}</p>}
          </div>
          <div className="form-group mb-3">
            <label className="my-0">Password confirm</label>
            <input  type='password' onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="password confirm"
              name="passwordconfirm"
            />
             {form.errors.passwordconfirm&&<p className='text-danger'>{form.errors.passwordconfirm}</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="form-group mb-3">
            <label className="my-0">Name</label>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="name"
              name="name"
            />
             {form.errors.name&&<p className='text-danger'>{form.errors.name}</p>}
          </div>
          <div className="form-group mb-3">
            <label className="my-0">Phone</label>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="phone"
              name="phone"
            />
             {form.errors.phone&&<p className='text-danger'>{form.errors.phone}</p>}
          </div>
          <div className="form-group mb-3">
            <label>Gender</label>
            <select className="form-control" name="gender">
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </div>
          <button
            className="text-white"
           
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "12px 26px",
              gap: "10px",

             
              background: "#6200EE",
             

              boxShadow:
                " 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: "50px",
              border: "none",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
            }}
            type='submit'>
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
