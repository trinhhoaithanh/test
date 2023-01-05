import { size } from 'lodash';
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ShoesCard from '../../Components/ShoesCard/ShoesCard';
import { addCarts, changeCartQuantity, getDetailProductApi } from '../../redux/reducers/productReducer';

const Detail = () => {

    const { productDetail, carts } = useSelector(state => state.productReducer);
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        const actionAsync = getDetailProductApi(params.id);
        dispatch(actionAsync);
    }, [params.id]);

    return (
        <div className='container'>
            <div className='row mt-3'>
                {/* <div className="col-1"></div> */}
                <div className='col-4' style={{ background: '#F8F8F8', width: '334px', height: '355px' }}>
                    <img src={productDetail?.image} alt='...' style={{ background: '#F8F8F8', width: '220px', height: '156px', marginTop: '109px', marginLeft: '57px' }} />
                </div>
                <div className="col-2"></div>
                <div className='col-6'>
                    <h3>{productDetail?.name}</h3>
                    <p>{productDetail?.description}</p>
                    <p style={{ fontSize: '24px', fontWeight: '500', color: '#1ED90E' }}>Available size</p>
                    <div className='d-flex'>
                        {productDetail?.size?.map((size, index) => {
                            return <div key={index} style={{ background: '#CCCCCC', width: '50px', height: '50px', textAlign: 'center', lineHeight: '50px', marginRight: '20px' }}>
                                {size}
                            </div>
                        })}
                    </div>
                    <h2 style={{ marginTop: '17px', color: '#FC0303' }}>{productDetail?.price} $</h2>
                    <div>
                        <button style={{ width: '50px', height: '50px', background: 'linear-gradient(180deg, #6181F3 0%, #7C97F5 99.48%)', color: '#FFFCFC' }} onClick={() => {
                            setQuantity(quantity + 1)
                        }}>+</button>
                        <span>{quantity}</span>
                        <button style={{ width: '50px', height: '50px', background: 'linear-gradient(180deg, #6181F3 0%, #7C97F5 99.48%)', color: '#FFFCFC' }} onClick={() => {
                            if (quantity > 1)
                                setQuantity(quantity - 1)
                        }}>-</button>
                    </div>
                    <button style={{ background: 'linear-gradient(270deg, rgba(62, 32, 248, 0.9) 5.14%, #D017EE 89.71%)', width: '175px', height: '64px', marginTop: '7px' }} onClick={() => {
                        const cart = carts.find(cart => cart.id === productDetail.id)
                        if (cart) {
                            const action = changeCartQuantity(productDetail.id, cart.quantity + quantity)
                            dispatch(action)
                        } else {
                            const cartsAction = addCarts({
                                id: productDetail.id, image: productDetail.image, name: productDetail.name, price: productDetail.price, quantity: quantity, total: productDetail.price * quantity
                            })
                            dispatch(cartsAction)
                        }
                    }}>Add to cart</button>
                </div>
            </div>
            <div className='mt-2'>
                <h3>Related Products</h3>
                <div className='row'>
                    {productDetail?.relatedProducts?.map((item, index) => {
                        return <div className='col-4' key={index}>
                            <ShoesCard prod={item} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Detail