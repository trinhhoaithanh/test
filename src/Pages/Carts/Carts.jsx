import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { render } from '@testing-library/react'
import { changeCartQuantity, deleteCart } from '../../redux/reducers/productReducer'
import { chain } from 'lodash'
import { ApiFilled } from '@ant-design/icons'
import { http, USER_LOGIN, getStoreJson } from '../../util/config'


const Carts = () => {
    const { carts } = useSelector(state => state.productReducer)

    const [selectionType, setSelectionType] = useState('checkbox');
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
            render: (_, { image }) => (
                <img src={image} style={{ width: '85px', height: '56px' }} />
            )
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'price',
            key: 'price',
            dataIndex: 'price',

        },
        {
            title: 'quantity',
            key: 'quantity',
            dataIndex: 'quantity',
            render: (_, record) => {
                return (
                    <div>
                        <button style={{ width: '40px', height: 'Hug (30.97px)', padding: '6px', borderRadius: '4px', background: '#6200EE' }} onClick={() => {
                            const action = changeCartQuantity(record.id, record.quantity + 1)
                            dispatch(action)
                        }}>+</button>
                        <span style={{ background: '#D9D9D9', margin: '0 11px', padding: '2px 40px' }}>{record.quantity}</span>
                        <button style={{ width: '40px', height: 'Hug (30.97px)', padding: '6px', borderRadius: '4px', background: '#6200EE' }} onClick={() => {
                            if (record.quantity > 1) {
                                const action = changeCartQuantity(record.id, record.quantity - 1)
                                dispatch(action)
                            }

                        }}>-</button>
                    </div>
                )
            }
        },
        {
            title: 'total',
            key: '',
            dataIndex: '',
            render: ({ price }, { quantity }) => (<div>{price * quantity}</div>)
        },
        {
            title: 'action',
            key: '',
            dataIndex: '',
            render: (_, record) => (
                <div>
                    <button style={{ width: '80px', height: 'Hug (30.97px)', padding: '6px', borderRadius: '4px', background: '#6200EE', marginRight: '25px' }}>EDIT</button>
                    <button style={{ width: '100px', height: 'Hug (30.97px)', padding: '6px', borderRadius: '4px', background: '#EB5757' }} onClick={() => {
                        console.log("bbbb");
                        const action = deleteCart(record.id)
                        dispatch(action)
                    }}>DELETE</button>
                </div>
            )
        },
    ]
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <div className="container">

            <div style={{ fontSize: '40px', marginBottom: '63px' }}>Carts</div>
            <Table rowSelection={{
                type: selectionType,
                ...rowSelection,
            }}
                columns={columns} dataSource={carts} pagination={false} ></Table>
            <button onClick={async () => {
                const orderDetail = carts.map((cart, index) => {
                    return {
                        productId: cart.id,
                        quantity: cart.quantity
                    }
                })
                const userLogin = getStoreJson(USER_LOGIN)
                const payload = {
                    orderDetail,
                    email: userLogin.email
                }
                console.log(payload);
                const result = await http.post('/api/Users/order', payload)
                if(result){
                    
                    alert("order thành công")
                }
            }} className='btn' style={{ background: '#F2994A', float: 'right' }}>SUBMIT ORDER</button>
            <div style={{ clear: 'both', marginBottom: '230px' }}></div>
        </div>
    )
}

export default Carts