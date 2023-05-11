import React, {useState} from "react";
import {Select, Space} from "antd";
import style from "./Product.module.scss";
import {useParams} from "react-router-dom";
import data from "../../../assets/data/data.json";
import ProductRecommendation from "./Product-recommendation/Product-recommendation"
import {useDispatch, useSelector} from "react-redux";
import {addCount, addToCart} from "../../../store/cartReducer";


const Product = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)

    //show description
    let {productId} = useParams();
    let product = data[productId - 1];
    const descriptionArray = []
    for (let key in product.description) {
        descriptionArray.push(key + ": " + product.description[key])
    }
    const description = descriptionArray.map(descript => {
        return <p>{descript}</p>
    });

    //volume
    const volume = product.volume.map(vol => {
        return {
            value: vol,
            label: vol,
        }
    });

    //function for change price
    const [oldPrice, setOldPrice] = useState(product.price[0].old);
    const [actualPrice, setActualPrice] = useState(product.price[0].actual)

    const [volumeSelected, setVolumeSelected] = useState(product.volume[0])

    const handleChange = (value) => {
        let index = product.volume.indexOf(value);
        setOldPrice(product.price[index].old);
        setActualPrice(product.price[index].actual)
        setVolumeSelected(product.volume[index])
    };

    const handleClick = (id, volume) => {
        let findItem = cart.find(item => item.id === id && item.volume === volume)
        const item = {
            id: id,
            volume: volume,
            count: 1
        }
        console.log(findItem)
        if (findItem === undefined) {
            console.log("if")
            dispatch(addToCart(item))
        } else {
            console.log("else")
            dispatch(addCount(item))
        }
    }

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
                        <input type="button" value="Add to cart" onClick={() => handleClick(product.id, volumeSelected)} className={style.button}/>
                    </div>
                </div>
            </div>
            <ProductRecommendation brand={product.brand} name={product.name} />


        </div>
    )
}

export default Product;