import React from "react";
import ProductItem from "./Product-item/Product-item";
import "./Section-products.css";
import data from "../../../assets/data/data.json";


export const SectionProducts = () => {
    let product = data.map(pr => <ProductItem pr={pr}/>);
    return (
        <div className="section-products">
            {product}
        </div>
    )

}

export default SectionProducts;