import React from 'react'
import style from './layout.module.css'

// import style from './layout.module.css'

const ShopCard = () => {
    return (
        <>
        {/* <br></br>
        <br></br>
        <br></br>
        <div class="card" style="width: 18rem;">
            <img src="./assets/kaos.jpg" class="card-img-top" alt="kaos.jpg"/>
            <div class="card-body">
                <h5 class="card-title">Kaos Polos</h5>
                <p class="card-text">Kaos Polos Bahan nyaman</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div> */}

        {/* <div className='card'>
        <img src="./assets/kaos.jpg" class="card-img-top" alt="kaos.jpg"/>
        <div className='card-body'>
            <p className='card-text'>Kaos Polos Bahan nyaman</p>
        </div>
        </div> */}

        

        <div className={'container'}>
            <div className={style.card_short}>
                <div className={style.card_short_image}></div>
               
                <a>
                <div className={style.card_short_description}>
                    <h4><b>Kemeja Unisex</b></h4>
                    <div className='row'>
                        <div className='col-9'><h6> Bahan Kain Katun  </h6></div>
                        <div className='col-1'><span>*****</span> </div>
                    </div> 
                </div>
                </a>
            
                    
            </div>
        </div>

        </>
      )
}

export default ShopCard