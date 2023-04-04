import React, { useState, useEffect } from 'react'
import { useNavigate , Link } from 'react-router-dom';
import Cart from './Cart';
import Navbar from '../HomePages/Navbar';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons'
import Footer from '../HomePages/Footer'
import Message from '../HomePages/Message';


const ListProductCart = () => {
  // get list product cart from local storage
  const productList = JSON.parse(localStorage.getItem('listCart'))
  console.log('productlist is:' + productList)

  //set again listproduct cart  when remove or update one of the product
  const [copyArray, setCopyArray] = useState(productList);
  // quantity 
  const [quantity, setQuantity] = useState()
  // state quantity 
  const [isEdit, setIsEdit] = useState(false)
  //state isticket nếu có sản phẩm trong giỏ mặc định ban đầu set bằng false, ko có sp trong giỏ set mặc định bằng false
  const [isTicket, setIsTicket] = useState(()=> false)
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [])
  

  // hander remove product from shopping cart
  const handerRemove = (id) => {
    console.log('your remove id' + id)
    const arrayAfterRemove = copyArray.filter((item) => item.id !== id)
    localStorage.setItem('listCart', JSON.stringify(arrayAfterRemove))
    setCopyArray(arrayAfterRemove)
  }

  // hander edit quantity product
  //  nếu như isEdit == false (mặc định ) thì mở ô thay đổi số lượng, đổi nút sửa thành đồng ý , đổi trạng thái isEdit = true 
  //  khi nhập xong nhấn đồng ý, trạng thái isEdit = true lúc này sẽ cập nhật lại số lượng (Nếu số lượng < 0 và không phải Number set mặc định = 1 )
  const handerEdit = (product, valueQuantity) => {
    console.log(product)
    if (!isEdit) {
      valueQuantity.current.style.display = 'block'
      setIsEdit(!isEdit)
    }
    else {
      valueQuantity.current.style.display = 'none'
      product.quantityProduct = valueQuantity.current.value
      const arrayAfterEdit = copyArray.map(item => {
        if (item.id === product.id) {
          return { ...item, ['quantityProduct']: 
            (parseInt(valueQuantity.current.value) > 0 ?valueQuantity.current.value: 1) }
        }
        else {
          return item
        }
      })
      setCopyArray(arrayAfterEdit)
      localStorage.setItem('listCart', JSON.stringify(arrayAfterEdit))
      setIsEdit(!isEdit)
    }
  }
  // change quantity when  type in input
  const handerChangeQuantity = () => {
    setQuantity(quantity)
  }
  // change checkbox
  const changeIsTicket = (product) => {
    const newArr = copyArray.map(data => {
      if(data.id === product.id) {
        return {...data, ['isChecked']: !data.isChecked}
      }
      else {
        return data
      }
    })
    setCopyArray(newArr)
    setIsTicket(false)
    localStorage.setItem('listCart',JSON.stringify(newArr))
  }

  // handle buynow nếu như không chọn sản phẩm nào thì báo lỗi, sau khi chọn nhấn mua thì xóa sản phẩm đấy khỏi danh sách cart
  const handleBuyNow = () => {
  // báo lỗi khi không chọn sản phẩm
  const checkError =  copyArray.some(data => data.isChecked)
  if(!checkError){
    alert('Vui lòng chọn sản phẩm')
    return;
  }
   const arrAfterBuy = copyArray.filter(data => data.isChecked !== true)
   const productsBuy = copyArray.filter(data => data.isChecked == true)
   console.log(productsBuy)
   setCopyArray(arrAfterBuy)
   localStorage.setItem('listCart',JSON.stringify(arrAfterBuy))
   navigate('/payment', { state: { productsBuy } });
  }

  // handle selectall chọn tất cả sản phẩm hoặc ngược lại
  const handleSelectAll = () => {
    setIsTicket(!isTicket)
     const selectAll = copyArray.map(data => {
      return {...data,  ['isChecked']:!isTicket}
    })
    setCopyArray(selectAll)
    localStorage.setItem('listCart',JSON.stringify(selectAll))
    localStorage.setItem('selectAll',JSON.stringify(!isTicket))
    
  }

  // removeListProducts kiểm tra sản phẩm nào đang được chọn thì sẽ xóa khỏi danh sách
  const removeListProducts = () => {
    const listRemoveProducts = copyArray.map(item => {
      if(item.isChecked){
        return item.id
      }
    })
    console.log(listRemoveProducts)
    const arrAfterRemoveProducts = copyArray.filter(item => !listRemoveProducts.includes(item.id))
    setCopyArray(arrAfterRemoveProducts)
    localStorage.setItem('listCart', JSON.stringify(arrAfterRemoveProducts))
  }

  return (
    // render list product cart
    <div className="container__listcart">
      <div className="product__navbar">
        <Navbar />
        <div className="product__navbar__bottom">
          <ul className="flex product__navbar__bottom__listicon mt-7">
            <li> Categories <i><DownOutlined /></i></li>
            <li className="flex pl-32 product__navbar__bottom__listicon--item"> <img className="h-6"
              src={require("../.././assest/detail/ecounpoint.png")}></img> Ecoun </li>
            <li className="flex pl-8 product__navbar__bottom__listicon--item"> <img className="h-6"
              src={require("../.././assest/detail/lazgloball.png")}></img> Lazada globall </li>
            <li className="flex pl-8 product__navbar__bottom__listicon--item"> <img className="h-6"
              src={require("../.././assest/detail/lazmall.png")}></img> Lazada mall </li>
            <li className="flex pl-8 product__navbar__bottom__listicon--item"> <img className="h-6"
              src={require("../.././assest/detail/vourche.png")}></img> Vourche </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className='list__cart__title'>{'Có' + " " + (copyArray && copyArray.length ? copyArray.length : 0) + " " + 'sản phẩm trong giỏ'}</h1>
        {/* select all */}
        <div>{(copyArray && copyArray.length ?  <div className='select__all' >
          <input className='select__all--input'checked={isTicket} 
            onChange={handleSelectAll} type="checkbox" />
         <div className='flex items-center cursor__pointer' onClick={removeListProducts}><DeleteOutlined />Deleted</div>
        </div> : null)}</div>
        <div> {copyArray && copyArray.length ? null :    <div className='list__cart__countinueshopping'>
            {copyArray && copyArray.length ? null : <button className='list__cart__countinueshopping--link' ><Link to='/'>Continue Shopping</Link></button>}
          </div>}
        </div>

        {/* render list products in shopping cart */}
        <div className='list__cart__container'>
          {copyArray ? copyArray.map(product => {
            return (
              <Cart product = {product} onRemove={handerRemove} quantity={quantity} onEdit={handerEdit}
                changeQuantity={handerChangeQuantity} isEdit={isEdit} changeIsTicket={changeIsTicket} />
            )
          }) : ''}
        </div>
        <div className='list__cart__btn'>{copyArray && copyArray.length ?
        <button  className="buy__now"
         onClick={handleBuyNow}>Buy Now</button>: null} </div>
      </div>
      <Footer />
      <Message />
    </div>
  )
}

export default ListProductCart