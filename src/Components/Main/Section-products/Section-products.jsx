import React from "react";
import ProductItem from "./Product-item/Product-item";
import "./Section-products.css";



export const SectionProducts = (props) => {
    let product = props.data.map(pr => <ProductItem pr={pr}/>);
    return (
        <div className="section-products">
            {product}
        </div>
    )

}

export default SectionProducts;