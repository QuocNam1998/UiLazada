import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { DataProducts } from "../Data/DataProducts";
import Navbar from "../HomePages/Navbar";
import Slider from "./Slider";
import { DownOutlined } from "@ant-design/icons";
import { DataAdress } from "../Data/DataAdress";

// Detail of product
export default function DetailProduct() {
    const [quantity, setQuantity] = useState(0)
    const [image, setImage] = useState('')
    const [showAll, setShowAll] = useState(false)
    const [height, setHeight] = useState('100%')
    const myRef = useRef(null)
    const productPage = useRef(null)
    const [listCart, setListCart] = useState(getLocalStorage())

     // product checked 
     // const [isChecked, setIsChecked] = useState(false)

    // get value from path url
    const id = useParams()
    console.log('id:' + id.id)

    // convert value to number 
    const idProduct = Number(id.id)
    // get product depend on value url path
    const product = DataProducts.find(product => product.id === idProduct)

    // tạo ra mảng mà không có phần tử hiện tại, dùng để tạo các sản phẩm liên quan 
    const realateArray = DataProducts.filter(product => product.id !== idProduct)
    // get listcart from local storage
    function getLocalStorage() {
        const test = ( localStorage.getItem('listCart'))
        if(!test){
            return []
        }
        else {
            return JSON.parse(test)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setImage(product.img[idProduct - 1].content)
        alert(`Go to sản phẩm "${product.img[idProduct - 1].title}" `)
        setQuantity(0)
    }, [idProduct])

    //add product in localstorage
    useEffect (()=> {
        localStorage.setItem('listCart', JSON.stringify(listCart))
    },[listCart])

    // decreate number product
    function decrease() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    // create number product
    function crease() {
        setQuantity(pre => pre + 1)
    }

    // hander slider
    function handerSlider(content) {
        setImage(content)
    }
    const handerShow = () => {
        const scrollend = productPage.current
        if (!showAll) {
            setHeight('200px')
            setShowAll(!showAll)
        }
        else {
            setHeight('100%')
            setShowAll(!showAll)
            scrollend.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
        }
    }
    // add product to cart
    const addCart = () => {
        alert(`Bạn đã thêm sản phẩm "${product.img[idProduct - 1].title}" vào giỏ hàng`)
        const productCart = {
            id: listCart.length + 1,
            name: product.img[idProduct - 1].title,
            img: product.img[idProduct - 1].content,
            quantityProduct: (quantity ? quantity : 1),
            price: product.price,
            isChecked: false,
        }   
         
        setListCart((pre => [...pre, productCart]))
        setQuantity(0)
    }
    // hander change value
    function handerChangeValue(e) {
        setQuantity(e.target.value)
    }
    // render detail product
    return (
        <React.Fragment>
            {/* Navbar product */}
            <div className="product__navbar">
                <Navbar data = {listCart}  />
                <div className="product__navbar__bottom">
                    <ul className="flex product__navbar__bottom__listicon mt-7">
                        <li>Categories <i><DownOutlined /></i></li>
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

            {/* detail product */}
            <div className="detail__product" >
                <div className="flex">
                    <div className="product__detail">
                        {/* image and swipper product */}
                        <div className="product__detail--container">
                            <div className="product__detail__image">
                                <img id="detail__image--show" src={image}></img>
                                <div className="container__section">
                                    {/* swipper reactjs */}
                                    <Slider product={product} handerSlider={handerSlider} />
                                </div>
                            </div>
                        </div>
                        {/* about product */}
                        <div className="product__detail__title">
                            {/* title  */}
                            <div className="product__detail__title--information">
                                {product.img[idProduct - 1].title}
                            </div>
                            {/* price  */}
                            <div className="product__detail__title--price">
                                {product.price}
                            </div>
                            {/* quantity product */}
                            <div className="quantity">
                                <div className="decription__title"><p>Quantity</p></div>
                                <div className="quantity__form">
                                    <div className="quantity__form__option">
                                        <button onClick={() => decrease()} className="quantity__decrease">-</button>
                                        <input type="number" className="quantity__form__option--input"
                                            value={quantity} onChange={(e) => handerChangeValue(e)} pattern="[0-9]*" />
                                        <button onClick={() => crease()} className="quantity__increase">+</button>
                                    </div>
                                </div>
                            </div>
                            {/* option */}
                            <div className="quantity__button">
                                <button onClick={addCart} className="add__cart">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    {/* delivery product */}
                    <div className="delivery__options">
                        <div className="delivery__information">
                            <p className="delivery--title">Delivery Options</p>
                            {/* address delivery */}
                            <div className="delivery__address">
                                <div className="delivery__address--icon "><img src={require("../../assest/delivery/location.png")}></img></div>
                                <div className="delivery px-3">Delievery address</div>
                                <div>
                                    {/* render list address  */}
                                    <select className="list__address">
                                        {DataAdress.map(item =>
                                            <option value={item.address}>{item.address}</option>)}
                                    </select></div>
                            </div>
                            {/* method delivery */}
                            <div className="delivery__method">
                                <div className="delivery__method--icon"><img src={require("../../assest/delivery/standard.png")}></img></div>
                                <div className="delivery px-3">Standard delivery</div>
                                <div className="delivery__method--price">{product.price}</div>
                            </div>
                            {/* cash delivery  */}
                            <div className="delivery__cash">
                                <div className="delivery__cash--icon "><img src={require("../../assest/delivery/cash.png")}></img></div>
                                <div className="delivery px-3">Cash on Delivery Available (No mutual check)</div>
                            </div>
                        </div>

                        <div className="QR__code">
                            <img src={require("../../assest/delivery/qrcode.png")} />
                            <p>Scan with mobile</p>
                        </div>
                    </div>
                </div>
                {/* relate product */}
                <div className="relate__product">
                        <p className="relate__product--title">Sản phẩm liên quan</p>

                        {/* render relate 5 product */}
                        <div className="container__relate__product">
                            {realateArray.slice(0, 5).map(
                                item => {
                                    return (
                                        <div key={item.id} className="relate__product__container">
                                            <Link to={`/detailproduct/${item.id}`}>
                                                <img className="relate__product__container--img"
                                                    src={item.img[item.id - 1].content} alt={item.img[item.id - 1].title} />
                                            </Link>
                                            <div className="relate__product__container--title">
                                                <div className="mt-1">{item.img[item.id - 1].title}</div>
                                                <div className="color__f57224">{item.price}</div>
                                            </div>
                                        </div>)
                                }
                            )}
                        </div>
                    </div>
                {/* decription of detail product */}
                <div className="flex">
                    <div className="product__decription" ref={productPage}  >
                        <div className="product__decription--title">Chi tiết sản phẩm {product.title}</div>
                        <div className="product__decription--sub">Mô tả sản phẩm</div>
                        <div className="product__decription--subchildren">Đây là hàng nhập khẩu chất lượng cao</div>
                        <div >
                            <ul className="list__decription">
                                <li>Làm sạch lông, bụi dính lên quần áo, sofa, chăn ga...</li>
                                <li> Keo dán chắc chắn 1 cuộn 60 tờ không gây dính trên bề mặt quần áo, chăn ga. </li>
                                <li> Keo dán thân thiện môi trường, không độc hại</li>
                                <li> LÕI CÂY LĂN CÓ KÍCH THƯỚC : 10 - 16CM</li>
                                <li>BẠN LƯU Ý : SHOP BÁN NGUYÊN BỘ BAO GỒM : 1 CÁN CÂY LĂN, 1 LÕI 16CM( hoặc 10CM), 1 NẮP CÂY LĂN</li>
                                <li>Dễ dàng mang theo bên người vali đi du lịch, công tác để chuẩn bị quần áo sạch sẽ không bám bụi bẩn, lông, xơ...</li>
                            </ul>
                        </div>

                        {/* show more image product */}
                        <div className="product__decription__img"><img style={{ height }} ref={myRef} className="product__decription__img--icon"
                            src={image || product.img[idProduct - 1].content}></img>
                        </div>
                        <div className="show__more">
                            <button onClick={handerShow} className="show__more--btn">{showAll ? 'Show' : 'Hide'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}