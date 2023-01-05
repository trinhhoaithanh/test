import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'antd'
import { getDetailProductApi } from '../../redux/reducers/productReducer'
import { useDispatch } from 'react-redux'

const ShoesCard = ({ prod }) => {
    const truncate = {
        width: '250px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginLeft: '24px',
        marginBottom:'13px'
    }
    const { Meta } = Card;
    const dispatch = useDispatch()
    return (
        <NavLink to={`/detail/${prod.id}`}>
            <Card
                hoverable
                style={{
                    width: '334px',
                    height: '369px',
                    background: '#F8F8F8',
                    borderRadius:'0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin:'auto'
                }}
                bodyStyle={{paddingLeft: 0,
                    paddingRight: 0, paddingBottom:0}}
                cover={<img alt="example" src={prod.image} style={{width:'210px', height:'168px', marginTop:'45px', marginLeft:'57px'}}/>}
            >
                <Meta title={prod.name} description={prod.description} style={truncate} />
                <div className="buy d-flex" style={{marginBottom:'0', fontWeight:'600'}} >
                    <p style={{background:'#9DE167', width:'175px', height:'64px', textAlign:'center', lineHeight:'64px', marginBottom:'0'}}>Buy now</p>
                    <p style={{background:'#DEDDDC', width:'160px', height:'64px', textAlign:'center', lineHeight:'64px', marginBottom:'0'}}>{prod.price} $</p>
                </div>
                
            </Card>

        </NavLink>
    )
}

export default memo(ShoesCard)