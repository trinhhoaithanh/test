import React from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerApi } from "../../redux/reducers/userReducer";
import { history } from "../../index";
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
    },
    validationSchema:yup.object().shape({
      email:yup.string().required('Email cannot be blank').email('Email is invalid')
      ,password:yup.string().required('Password cannot be blank'),name:yup.string().required('Name cannot be blank')
      ,phone:yup.string().required('Phone cannot be blank')
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
            <p className="my-0">Email</p>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="email"
              name="email"
            />
             {form.errors.email&&<p className='text-danger'>{form.errors.email}</p>}
          </div>
          <div className="form-group mb-3">
            <p className="my-0">Password</p>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="password"
              name="password"
            />
             {form.errors.password&&<p className='text-danger'>{form.errors.password}</p>}
          </div>
          <div className="form-group mb-3">
            <p className="my-0">Password confirm</p>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="password confirm"
              name="passwordconfirm"
            />
             {form.errors.passwordconfirm&&<p className='text-danger'>{form.errors.passwordconfirm}</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="form-group mb-3">
            <p className="my-0">Name</p>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="name"
              name="name"
            />
             {form.errors.name&&<p className='text-danger'>{form.errors.name}</p>}
          </div>
          <div className="form-group mb-3">
            <p className="my-0">Phone</p>
            <input onChange={form.handleChange} onBlur={form.handleBlur}
              className="form-control bg-light"
              placeholder="phone"
              name="phone"
            />
             {form.errors.phone&&<p className='text-danger'>{form.errors.phone}</p>}
          </div>
          <div className="row">
            <div className="col-4">
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
            <div className="col-4">
              <input
                type="radio"
                name="gender"
                id="dot-1"
                value="true"
                
              />
              <label>
                
                <span >Male</span>
              </label>
            </div>
            <div className="col-4">
              <input type="radio" name="gender" id="dot-2" value="false" />
              <label>
                <span >Female</span>
              </label>
            </div>
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

              /* 01. Primary/500 */

              background: "#6200EE",
              /* 04 dp */

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
