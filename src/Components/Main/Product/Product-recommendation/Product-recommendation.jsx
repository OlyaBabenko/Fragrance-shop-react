import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import data from "../../../../assets/data/data.json";
import style from "./Product-recommendation.module.scss";

import 'swiper/css';
import 'swiper/css/navigation';
import "./slider.css";
import {useNavigate} from "react-router-dom";

const ContainerProduct = (props) => {
    const navigate = useNavigate()
    const showProduct = () => {
        navigate(`/product/${props.pr.id}`)
    }
    return (
        <div className={style.productContainer} onClick={()=> {showProduct()}}>
            <div className={style.imageContainer}>
                <img src={props.pr.urlImage} alt={props.pr.name} className={style.imageProduct}/>
            </div>
            <h2 className={style.nameProduct}>{props.pr.brand} {props.pr.name}</h2>
            <h3 className={style.volumeProduct}>{props.pr.volume[0]}</h3>
            <h2 className={style.nameProduct}>{props.pr.price[0].actual}</h2>
        </div>

    )
}

function ProductRecommendation(props) {

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function createProduct () {
        let arrayProduct=[];

        data.forEach(pr => {
            if (pr.brand === props.brand && pr.name !== props.name) {
                arrayProduct.push(pr)
            }
        })
        while (arrayProduct.length < 5) {
            let index = getRandomIntInclusive(0, (data.length-1));
            arrayProduct.push(data[index]);
        }
        return arrayProduct;
    }
    let product = createProduct();

    return (
        <section className={style.productRecommendation}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                className={style.productSwiper}
            >
                <SwiperSlide>
                    <ContainerProduct pr={product[0]}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ContainerProduct pr={product[1]}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ContainerProduct pr={product[2]}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ContainerProduct pr={product[3]}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ContainerProduct pr={product[4]}/>
                </SwiperSlide>
            </Swiper>
        </section>

    )
}

export default ProductRecommendation;