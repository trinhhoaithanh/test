import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";
import {
  getProfileApi,
  updateProfileApi,
} from "../../redux/reducers/userReducer";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Input } from "antd";
const Profile = () => {
  const { userProfile } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    const actionAsync = getProfileApi();

    dispatch(actionAsync);
    form.setFieldValue(userProfile);
  }, []);

  const onSubmit = (values) => {
    const updateProfile = updateProfileApi(values);
    dispatch(updateProfile);
  };

  return (
    <>
      <h3
        className="text-white"
        style={{
          background: "linear-gradient(180deg, #F21299 0%, #1B02B5 100%)",
          width: "698px",
          height: "74px",
          lineHeight: "74px",
          paddingLeft: "25px",
          marginTop: "44px",
        }}
      >
        Profile
      </h3>
      <div className="row mt-5">
        <div className="col-2">
          <img
            className="w-100 rounded-circle"
            src={userProfile?.avatar}
            alt="..."
          />
        </div>
        <div className="col-5">
          <Form onFinish={onSubmit}>
            <Form.Item label="Email" name="email">
              <Input
                style={{
                  padding: "16px 12px 14px 14px",
                  background: " rgba(33, 33, 33, 0.08)",
                  borderRadius: " 4px 4px 0px 0px",
                }}
              />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input style={{
                  padding: "16px 12px 14px 14px",
                  background: " rgba(33, 33, 33, 0.08)",
                  borderRadius: " 4px 4px 0px 0px",
                }}/>
            </Form.Item>
          </Form>
        </div>
        <div className="col-5">
          <Form onFinish={onSubmit}>
            <Form.Item label="Name" name="name">
              <Input style={{
                  padding: "16px 12px 14px 14px",
                  background: " rgba(33, 33, 33, 0.08)",
                  borderRadius: " 4px 4px 0px 0px",
                }}/>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input style={{
                  padding: "16px 12px 14px 14px",
                  background: " rgba(33, 33, 33, 0.08)",
                  borderRadius: " 4px 4px 0px 0px",
                }}/>
            </Form.Item>
            <div className="row">
              <div className="col-7">
                <Form.Item name="gender" label="Gender">
                  <div className="row">
                    <div className="col-3">
                      <input type="radio"/>

                      <p>Male</p>
                    </div>
                    <div className="col-3">
                      <input type="radio"/>
                      <p>Female</p>
                    </div>
                  </div>
                </Form.Item>
              </div>
              <div className="col-5">
                <Form.Item>
                  <button className="btn btn-success" style={{ background:' #6200EE'}} type="submit">
                   
                    Update
                  </button>
                </Form.Item>
              </div>
            </div>
          </Form>
          
        </div>
      </div>
      <hr className="mx-5" />
      <ul className="nav nav-tabs container">
        <li className="nav-item">
          <a
            style={{
              color: "#DD2AED",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "39px",
            }}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Order history
          </a>
        </li>
        <li className="nav-item">
          <a
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "39px",
            }}
            className="nav-link text-dark"
            href="#"
          >
            Favourite
          </a>
        </li>
      </ul>
      <div className="container my-5">
        <p style={{ color: "#CB0DC3" }}>
          + Orders have been placed on 09-19-2020
        </p>

        <table className="table">
          <thead>
            <tr className="table-secondary">
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
              <td>
                <img src="./img/product.png" alt="" />
              </td>
              <td>Product 1</td>
              <td>1000</td>
              <td>1</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container my-5">
        <p style={{ color: "#CB0DC3" }}>
          + Orders have been placed on 09-19-2020
        </p>

        <table className="table">
          <thead>
            <tr className="table-secondary">
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
              <td>
                <img src="./img/product.png" alt="" />
              </td>
              <td>Product 1</td>
              <td>1000</td>
              <td>1</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container my-5">
        <nav aria-label="Page navigation example text-right">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                9
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                10
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Profile;
