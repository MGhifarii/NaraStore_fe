import React from 'react'
import ShopImage from '../assets/shopVektor.jpg'
import style from './layout.module.css'
import { useNavigate } from 'react-router-dom';


const ShopSection = () => {
    const navigate = useNavigate();

    const onStart = () => {
        navigate("/login")
    };
    return (
        <>
        <div className={`${style.row_hero} ${"d-flex"}`}>
            <div className='col-1'></div>
            <div className={`${style.hero_image} ${"col-5"}`}>
                <img src={ShopImage} alt="Shop Image" width={632} height={666}/>
            </div>
            <div className={`${style.hero_container} ${"col-4"}`}>
                <h1> Take Your Stuff</h1>
                <p>in NaraStore you can shoping everywhere everytime!</p>
                <button onClick={onStart}>Start</button>
            </div>
        </div>
        </>
    )
}

export default ShopSection