import React from "react";
import ShopCard from "./ShopCard"
import style from "./layout.module.css"

const ShopGrid = () => {
    return (
      <div className='container d-grid'>
        {/* <h1 className={style.owl_title}>Selamat Berbelanja</h1>
      <hr></hr> */}
        <div className='row py-4 '> 
          <div className='col d-flex'>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
          </div>
        </div>
        {/* <div className='row py-4'> 
          <div className='col d-flex'>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
          </div>
        </div>
        <div className='row py-4'> 
          <div className='col d-flex'>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
          </div>
        </div> */}
      </div>
    )
  
  
    
  
  }
  
  export default ShopGrid