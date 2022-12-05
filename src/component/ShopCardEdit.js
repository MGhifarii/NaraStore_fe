// import React, { useEffect } from 'react'
// import Layout from './Layout'
// import { Container, Card, Dropdown, Row, Col, DropdownButton, Button } from 'react-bootstrap'
// import { BiDollar } from 'react-icons/bi'
// import { BsThreeDotsVertical, BsPlusLg } from 'react-icons/bs'
// import { HiLocationMarker } from 'react-icons/hi'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllProduct, deleteProduct } from '../features/product/productSlice'

// // import style from './layout.module.css'

// const ShopCardEdit = (props) => {
//     const { product } = useSelector((state) => state.product)
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//     (async () => {
//     await dispatch(getAllProduct())

//     document.querySelectorAll('.dropdown-toggle').forEach((card) => {
//       card.style.background = 'none'
//       card.style.padding = '0'
//       card.style.border = 'none'
//     })
//   })()

//   dispatch(getAllProduct())
//   }, [dispatch])

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id))
//   }
  
//   const card = {
//     border: '2px solid rgba(236, 236, 236, 1)',
//     borderRadius: '12px',
//     width: '22rem',
//     padding: '0.8rem',
//     display: 'inline-block',
//     textAlign: 'left',
//     margin: '2rem',
//   }
//   const button = {
//     background: 'none',
//     border: '2px solid rgba(236, 236, 236, 1)',
//     borderRadius: '12px',
//     width: '22rem',
//     padding: '2rem',
//     color: '#BABEC1',
//     fontSize: '0.7rem',
//     fontWeight: '700',
//   }

//   return (
//     <>
//       <Layout>
//         <Container className='text-center my-5'>
//           <h1 style={{fontSize: '3rem', fontWeight: 'bold', margin: '5rem 0 1rem'}}>Lowonganmu</h1>

//           {/* card 1 */}
//           {product?.products?.map((product, id) => (
//             <Card style={card} key={id}>
//             <Card.Body>
//               <Row>
//                 <Col>
//                 <a href='/list-product' style={{color: 'black', textDecoration: 'none'}}>
//                   <Card.Title style={{fontWeight: 'bold'}}>{product.title}</Card.Title>
//                 </a>
//                 </Col>
//                 <Col className='text-end'>
//                   <DropdownButton 
//                     key='end'
//                     id='dropdown-button-drop-end'
//                     drop='end' 
//                     name={<BsThreeDotsVertical style={{color: 'grey'}} />}
//                     >
//                     <Dropdown.Item href={`/product/edit-product/${product.id}`}>
//                         Ubah
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleDelete(product.id)}>Hapus</Dropdown.Item>
//                   </DropdownButton>
//                 </Col>
//               </Row>

//                 <Card.Text style={{fontSize: '0.7rem', marginTop: '1rem'}}>
//                         {product.description}
//                     </Card.Text>
//               <Card.Subtitle className="mb-2" style={{fontSize: '0.7rem'}}><BiDollar style={{fontSize: "0.8rem"}} /> {product.prize}</Card.Subtitle>
              
//             </Card.Body>
//           </Card>
//           ))}

//           <Button style={button} href='/product/buat-product'>
//             <BsPlusLg className='opacity-75' style={{display: 'block', margin: '0 auto', fontSize: '3.5rem', marginBottom: '1.5rem'}} />
//             <p className='m-0 opacity-75'>Tambah barang</p>
//           </Button>
          
//         </Container>
//       </Layout>
//     </>
//   )
// }

// export default ShopCardEdit


import React from 'react'
import style from './layout.module.css'
import { Container, Card, Dropdown, Row, Col, DropdownButton, Button } from 'react-bootstrap'
import { BiDollar } from 'react-icons/bi'
import { BsThreeDotsVertical, BsPlusLg } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, deleteProduct } from '../features/product/productSlice'
import axios from 'axios'

// import style from './layout.module.css'

const ShopCardEdit = (props) => {
    const { name, description, prize, id } = props
    const { product, setProduct } = useSelector((state) => state.product)

    const dispatch = useDispatch()
    
  //   useEffect(() => {
  //    (async () => {
  //    await dispatch(getAllProduct())

  //    document.querySelectorAll('.dropdown-toggle').forEach((card) => {
  //      card.style.background = 'none'
  //      card.style.padding = '0'
  //      card.style.border = 'none'
  //    })
  //  })()

  //  dispatch(getAllProduct())
  //  }, [dispatch])

  // const getAllProduct = async () => {
  //   const response = axios.get(`http://localhost:5000/api/products/`);
  //   setProduct(response.data);
  // }

  // const deleteProduct = async (id) => {
  //   axios.delete(`http://localhost:5000/api/products/${id}`);
  //   getAllProduct();
  //  }
   
    const handleDelete = async (id) => {
    await dispatch(deleteProduct(id))
    window.location.reload()
    await dispatch(getAllProduct())
    }
    return (
        <>
        <div className={'container mx-auto'}>
            <div className={style.card_short}>
                <div className={style.card_short_image}>
                </div>
                <Col className='text-end'>
                   <DropdownButton 
                     key='end'
                     id='dropdown-button-drop-end'
                     drop='end' 
                     name={<BsThreeDotsVertical style={{color: 'grey'}} />}
                     >
                     <Dropdown.Item href={`/edit-product/${id}`}>
                         Ubah
                     </Dropdown.Item>
                     <Dropdown.Item onClick={() => handleDelete(id)}>Hapus</Dropdown.Item>
                   </DropdownButton>
                 </Col>
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

export default ShopCardEdit