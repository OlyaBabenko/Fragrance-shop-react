import React from "react";
import "./Product.css";
import {useParams} from "react-router-dom";
import data from "../../../assets/data/data.json";

const Product = () => {
    let {productId}= useParams();
    let product = data[productId-1];
        // .filter((item)=> {if (item.id === productId) return item});
    console.log({product});
    const description = product.description.map(descript => {return <p>{descript}</p>})
    return (
        <div className="productWrapper">
            <div className="product-description">
                {description}
            </div>
            <div className="imageContainer">
                <img src={product.urlImage} alt={product.name} className="productImage"/>
            </div>
            <div className="price-volume-container">

            </div>
        </div>
    )
}

export default Product;