import React, {useState} from "react";
import "./Header.scss";
import logo from "../../assets/image/Logo.png";
// import {Link} from "react-router-dom";
import searchImg from "../../assets/image/search.png";
import cart from "../../assets/image/cart-balls.png";
import heart from "../../assets/image/heart-2.png";
import login from "../../assets/image/account-login.png";
import ModalCart from "../Main/ModalCart/Modal-cart";


const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <header>
            <img src={logo} alt="Besnik-logo" className="logo"/>
            <div className="search-bar">
                <form className="search-form" role="search">
                    <input
                        className="input-search"
                        placeholder="Search"
                        type="search"
                    />
                </form>
                <form method="post">
                    <button type="submit" className="search-button"><img src={searchImg} alt="search" className="search-button-img"/></button>
                </form>
            </div>
            <nav className="header-nav">
                <button className="header-nav-btn" onClick={() => setModalActive(true)}><img src={cart} alt="Cart" className="header-nav-img"/></button>
                <button className="header-nav-btn"><img src={heart} alt="Favorite" className="header-nav-img"/></button>
                <button className="header-nav-btn"><img src={login} alt="Login" className="header-nav-img"/></button>
            </nav>
            <ModalCart active={modalActive} setActive={setModalActive}/>
        </header>
    )
}

export default Header;