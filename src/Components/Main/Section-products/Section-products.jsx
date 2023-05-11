import React from "react";
import ProductItem from "./Product-item/Product-item";
import "./Section-products.css";
import {useSelector} from "react-redux";


export const SectionProducts = () => {
    const products = useSelector(state => state.products.products)
    let filter = useSelector(state => state.filter)
    let product = products
        .filter(pr => {
            if (filter.brands.length > 0 || filter.countries.length > 0) {
                if (filter.brands.includes(pr.brand) || filter.countries.includes(pr.description['Country of TM'])) {
                    return pr
                }
            } else return pr
        })
        .map(pr => {
            return <ProductItem pr={pr}/>
        });

    return (
        <div className="section-products">
            {product}
        </div>
    )

}

export default SectionProducts;