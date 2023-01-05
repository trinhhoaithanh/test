import React from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import ShoesCard from '../../Components/ShoesCard/ShoesCard';
import { useEffect } from 'react';
import axios from 'axios';
import { getProductApi } from '../../redux/reducers/productReducer';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { useRef } from 'react';
import { Col, Divider, Row } from 'antd'

const contentStyle = {
    paddingTop: '46px',
    margin: 0,
    height: '500px',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    background: '#F5F5F5',
    alignItems: 'center'
};


const Home = () => {
    const { arrProduct } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const ref = useRef()
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const getAllProductApi = async () => {
        // const result = await axios({
        //   url:'https://shop.cyberlearn.vn/api/product',
        //   method:'GET'
        // });
        // //dispatch action lên reducer
        // const action = {
        //   type:'productReducer/getAllProductApi',
        //   payload:result.data.content
        // };
        //Redux 2 loại action
        /*
          action1: {type,payload}
          action2: async function (dispatch2) { xử lý => dispatch2(redux)}
        
        */

        const action = getProductApi();

        dispatch(action);
    }

    useEffect(() => {
        //call api
        getAllProductApi();
    }, []);

    return (
        <div>
            <Carousel afterChange={onChange} effect="fade" dots={false} arrows draggable ref={ref}>
                {arrProduct.slice(0, 3).map((item, index) => {
                    return <div key={index}>
                        <h3 style={contentStyle} className='d-flex'>
                            <span><CaretLeftOutlined style={{ color: 'rgba(0, 0, 0, 0.24)', fontSize: '55px' }} onClick={() => {
                                ref.current.prev()
                            }} /></span>
                            <span >
                                <img src={item.image} alt="..." width={'689px'} style={{}} />
                            </span>
                            <span className='text-dark' style={{ marginLeft: '15%', textAlign: 'left' }}>
                                <p style={{ fontSize: '40px', fontWeight: '' }}>{item.name}</p>
                                <p style={{ fontSize: '20px', fontWeight: '300' }}>{item.description}</p>
                                <div style={{ background: '#F8B653', padding: '7px', width: '150px', height: '50px', textAlign: 'center' }} className="mt-5 text-white">Buy now</div>
                            </span>
                            <span onClick={() => {
                                ref.current.next()
                            }}><CaretRightOutlined style={{ color: 'rgba(0, 0, 0, 0.24)', fontSize: '55px', marginLeft: '200px' }} /></span>
                        </h3>
                    </div>
                })}
            </Carousel>

            <h3 style={{background: 'linear-gradient(180deg, #F21299 0%, #1B02B5 100%)', width:'698px', height:'74px', lineHeight:'74px', paddingLeft:'25px', marginTop:'44px'}}>Product Feature</h3>
            <Row gutter={[16,24]}>
                {arrProduct.map((item, index) => {
                    return <Col className='gutter-row' span={8} key={index}>
                        <ShoesCard prod={item} />
                    </Col>
                })}
            </Row>
        </div>


    );
}

export default Home