import React from 'react'
import style from './layout.module.css'

// import style from './layout.module.css'

const ShopCard = (props) => {
    const { name, description, prize } = props
    return (
        <>
        <div className={'container mx-auto'}>
            <div className={style.card_short}>
                <div className={style.card_short_image}>
                    {/* <img src={Gambar} alt="Gambar kaos" width={170}/> */}
                </div>
                <a>
                <div className={style.card_short_description}>
                    <h4><b>{name}</b></h4>
                    <div className='row'>
                        <div className='col-9'><h6> {description}  </h6></div>
                        <div className='col-1'><span>{prize}</span> </div>
                    </div> 
                </div>
                </a>  
            </div>
        </div>

        </>
      )
}

export default ShopCard