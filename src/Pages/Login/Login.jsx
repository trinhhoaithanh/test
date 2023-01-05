import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

import { history } from "../../index";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { saveStore, saveStoreJson } from "../../util/config";

const Login = () => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank!")
        .email("email is invalid!"),
      password: yup.string().required("password cannot be blank!"),
    }),
    onSubmit: (values) => {
      const actionAsync = loginApi(values);
      dispatch(actionAsync);
    },
  });
  const responseFacebook = (response) => {
    axios({
      url:"https://shop.cyberlearn.vn/api/Users/facebookLogin",
      method:'POST',
      data:{
        facebookToken:response.accessToken
      }
      
    }).then(res=>{
      localStorage.setItem('accessToken',res.data.content);
    })
  };
  return (
    <form className="container" onSubmit={form.handleSubmit}>
      <h3 position-relative>Login</h3>
      <hr />
      <div className="position-absolute top-50 start-50 translate-middle w-25">
        <div className="form-group mb-3">
          <p className="m-0">Email</p>
          <input
            placeholder="email"
            className="form-control"
            name="email"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.email && (
            <p className="text-danger">{form.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <p className="m-0">Password</p>
          <input
          type='password'
            placeholder="password"
            className="form-control"
            name="password"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.password && (
            <p className="text-danger">{form.errors.password}</p>
          )}
        </div>
        <div className="form-group my-3">
          <div className="row">
            <div className="col-8">
              <h6
                onClick={() => {
                  history.push("/register");
                }}
                className="text-center pt-3"
                style={{ cursor:'pointer',
                  color: "#152AEB",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "24px",
                  /* identical to box height, or 133% */

                  letterSpacing: "0.135px",
                }}
              >
                Register now?
              </h6>
            </div>
            <div className="col-3">
              <button
                style={{
                  backgroundColor: "#6200EE",
                  boxShadow:
                    " 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                className="btn btn-success mt-2"
                type="submit"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
        <div className="form-group text-center">
          
            <FacebookLogin
              appId="6077217622342320"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
            />
         
          
        </div>
      </div>
    </form>
  );
};

export default Login;
