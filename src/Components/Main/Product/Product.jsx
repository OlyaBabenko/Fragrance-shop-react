import React, {useState} from "react";
import {Select, Space} from "antd";
import style from "./Product.module.scss";
import {useParams} from "react-router-dom";
import data from "../../../assets/data/data.json";
import ProductRecommendation from "./Product-recommendation/Product-recommendation"


const Product = () => {

    //show description
    let {productId} = useParams();
    let product = data[productId - 1];
    const description = product.description.map(descript => {
        return <p>{descript}</p>
    });

    //volume
    const volume = [];
    product.volume.map(vol => {
        let volumeItem = {
            value: vol,
            label: vol,
        }
        volume.push(volumeItem);
        return volume
    });

    //function for change price
    const [oldPrice, setOldPrice] = useState(product.price[0].old);
    const [actualPrice, setActualPrice] = useState(product.price[0].actual)
    const handleChange = (value) => {
        let index = product.volume.indexOf(value);
        setOldPrice(product.price[index].old);
        setActualPrice(product.price[index].actual)
    };

    return (
        <div className={style.productPage}>
            <div className={style.pseudoHeader}></div>
            <div className={style.productWrapper}>
                <h1 className={style.nameFragrance}>{product.brand} {product.name}</h1>
                <div className={style.productImageDescr}>
                    <div className={style.imageContainer}>
                        <img src={product.urlImage} alt={product.name} className={style.productImage}/>
                    </div>
                    <div className={style.productDescription}>
                        {description}
                    </div>
                </div>
                <div className={style.priceVolumeContainer}>
                    <Space wrap>
                        <Select
                            defaultValue={product.volume[0]}
                            onChange={handleChange}
                            options={volume}
                        />
                    </Space>
                    <div>
                        <h3 className={style.oldPrice}>{oldPrice}</h3>
                        <h2>{actualPrice}</h2>
                    </div>
                    <div>
                        <input type="button" value="BUY" className={style.button}/>
                    </div>
                </div>

            </div>
            <ProductRecommendation brand={product.brand} name={product.name} />


        </div>
    )
}

export default Product;