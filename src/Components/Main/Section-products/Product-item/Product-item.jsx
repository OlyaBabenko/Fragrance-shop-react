import React from "react";
import "./Product-item.css";
import {useNavigate} from "react-router-dom";

const ProductItem = (props) => {
    const navigate = useNavigate()
    const showProduct = () => {
        navigate(`/product/${props.pr.id}`)
    }
    return (
        <div className="productItem" onClick={()=>{showProduct()}}>
            <div className="productDivImg"><img src={props.pr.urlImage} alt={props.pr.name} className="productItemImg"/></div>
            <h2 className="productName">{props.pr.brand} {props.pr.name}</h2>
            <h3 className="productVolume">{props.pr.volume[0]}</h3>
            <h2 className="productPrice">{props.pr.price[0].actual}</h2>
            {/*<button className="productItemShow" onClick={()=>{showProduct()}}>Show more</button>*/}
        </div>
    )
}

export default ProductItem;