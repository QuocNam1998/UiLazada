import React, {useState} from 'react'
import { useLocation, Link } from 'react-router-dom';


const Payment = () => {
  const location = useLocation();
  const productsBuy = location.state?.productsBuy;
  console.log(productsBuy)
    return (
    <div className='payment'>
        <div>Dữ liệu đã được gửi đi, cám ơn bạn đã ủng hộ</div>
        <div className='back__home'><Link to='/'>
          Quay về trang chủ
        </Link></div>
    </div>
  )
}

export default Payment