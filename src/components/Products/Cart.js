import React, { useRef, useState } from 'react'
import { HeartOutlined } from '@ant-design/icons'

const Cart = ({ product, onRemove, quantity, onEdit, changeQuantity, isEdit, changeIsTicket }) => {
    //get list product from local storage
    const listCart = JSON.parse(localStorage.getItem('listCart'))
    console.log(listCart)
    const valueQuantity = useRef()
    const btnLove = useRef()
    const [isLoved, setIsLoved] = useState(false)

    // hander click favorites product
    const handlerClick = () => {
        if (!isLoved) {
            btnLove.current.style.color = 'red';
            btnLove.current.style.transition = '0.5s ease-in-out';
            setIsLoved(!isLoved)
        }
        else {
            btnLove.current.style.color = 'rgb(100, 110, 131)';
            btnLove.current.style.transition = '0.5s ease-in-out';
            setIsLoved(!isLoved)
        }
    }

    // handleChange checkbox nếu isCheked = true thì đổi lại thành false và ngược lại
    // const handerCheked = (e) => {
    //     setIsChecked(!isChecked)
    //     const updateArr = listCart.map(data => 
    //       (data.id === product.id) ? { ...data, isChecked: !isChecked } : data)
    //         localStorage.removeItem('listCart')
    //         localStorage.setItem('listCart',JSON.stringify(updateArr))
    // }

    return (
        // Cart
        <div className='flex cart'>
            {/* choose cart  */}
            <div className='cart__container-checkbox'>
                <input className='checkbox--item' type="checkbox" checked={product.isChecked} onChange={() => changeIsTicket(product)} />
            </div>
            <div >
                <img className='cart__img' src={product.img} /></div>
            <div className=' cart__container'>
                <div className='cart__title' >{product.name}</div>
                <div>
                    {/* set quantity  default product = 1 */}
                    <p> Số lượng sản phẩm: {(quantity ? quantity : (product.quantityProduct ? product.quantityProduct :
                        product.quantityProduct + 1))}</p>
                    {/* only type numbers 0 -9  on input tag */}
                    <input type="number" pattern="[0-9]*" style={{ display: "none" }} ref={valueQuantity} onChange={changeQuantity} className='cart__value' value={quantity} /></div>
                <p>Giá trên 1 sản phẩm:  {product.price ? product.price : ''}</p>
                <p>Giá tổng: {product.price * (product.quantityProduct ? product.quantityProduct : 1)}</p>
                <div className='flex'>
                    <button className='cart__edit' style={{display:product.isChecked ? 'block':'none'}} onClick={() => onEdit(product, valueQuantity)}>{!isEdit ? 'Sửa số lượng'
                        : 'Đồng ý'}</button>
                    <button className='cart__remove' style={{display:product.isChecked ? 'block':'none'}} onClick={() => onRemove(product.id)}> Xóa sản phẩm </button>
                </div>
            </div>
            <span className='love__cartbtn' style={{
                position: 'relative',
                left: '50%',
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px'
            }}>
                <HeartOutlined ref={btnLove} onClick={handlerClick} style={{ color: 'rgb(100,110,131)', cursor: 'pointer' }} />
            </span>
        </div >
    )
}
export default Cart