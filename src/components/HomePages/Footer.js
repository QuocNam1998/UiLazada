import React from 'react'
import footerlazada from "../../assest/footer/footerlazada.png"
import footertechcombank from "../../assest/footer/footertechcombank.png"
import footervoucher from "../../assest/footer/footervoucher.png"
import androidggplay from "../../assest/footer/androidggplay.png"
import lazadaicon from "../../assest/footer/lazada.png"

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer__banner">
                    <div className="footer__banner__cointainer">
                        <img className="footer__banner--img" src={footerlazada}></img>
                    </div>
                    <div className="footer__banner__cointainer">
                        <img className="footer__banner--img" src={footertechcombank}></img>
                    </div>
                    <div className="footer__banner__cointainer">
                        <img className="footer__banner--img" src={footervoucher}></img>
                    </div>
                </div>
                <div className="footer__contact">
                    <div className="contact__us">
                        <h1>CONTACT US</h1>
                        <ul className="contactus__list">
                            <li className="contactus__list--item">HotLine & Online Chat</li>
                            <li className="contactus__list--item">Help center</li>
                            <li className="contactus__list--item">How to Buy</li>
                            <li className="contactus__list--item">Shipping & Delivery</li>
                            <li className="contactus__list--item">International Product Policy</li>
                            <li className="contactus__list--item">How to return</li>
                        </ul>
                    </div>
                    <div className="contact__lazada">
                        <h1>LAZADA VIETNAM</h1>
                        <ul className="lazada__list">
                            <li className="lazada__list--item">All Categories</li>
                            <li className="lazada__list--item">About Lazada</li>
                            <li className="lazada__list--item">Sell on Lazada</li>
                            <li className="lazada__list--item">Afﬁliate Program</li>
                            <li className="lazada__list--item">Careers</li>
                            <li className="lazada__list--item">Terms & Conditions</li>
                            <li className="lazada__list--item">Press & Media</li>
                            <li className="lazada__list--item">Intellectual Property Protection</li>
                            <li className="lazada__list--item">Operating Regulation</li>
                            <li className="lazada__list--item">Procedure of claim and dispute handling</li>
                        </ul>
                    </div>
                    <div className="contact__icon">
                        <div className="contact__icon--img">
                            <img src={lazadaicon}></img>
                        </div>
                        <div>
                            <p className="gowhereyourheartbeat">Go where your heart beat</p>
                            <p className="downloadtheapp">Download the app</p>
                        </div>
                    </div>
                

                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer

