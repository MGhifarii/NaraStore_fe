import React, { useEffect } from 'react'
import Header from '../../component/Header'
import ShopCardEdit from '../../component/ShopCardEdit'
import { getAllProduct } from '../../features/product/productSlice.js'
import { useDispatch, useSelector } from 'react-redux'
const Detailpage = () => {



  const { product } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  
  useEffect(() => {
    (async () => {
    await dispatch(getAllProduct())

  })()

  dispatch(getAllProduct())
  }, [])


  return (
    <>
    <Header/>
    <div className='container row d-flex mx-auto justify-content-between'>
        {product?.map((product) => (
      <div className='col-3 m-4' key={product.id}>
        <ShopCardEdit
        id={product.id}
        name={product.name}
        description={product.description}
        prize={product.prize}
        />
      </div>
        ))}
    </div>
    </>
  )
}

export default Detailpage