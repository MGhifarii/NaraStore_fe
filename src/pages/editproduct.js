
// import React, { useEffect, useState } from 'react'
// import { Container, Button, Form, InputGroup } from 'react-bootstrap'
// import Layout from '../component/Layout'
// import { useDispatch, useSelector } from 'react-redux'
// import { updateProduct, reset, getProductById, deleteProduct } from '../features/product/productSlice'
// import { useParams } from 'react-router-dom'

// const Product = () => {
//     const { product } = useSelector((state) => state.product)

//     const [formData,  setFormData] = useState({
//         name: "",
//         description: "",
//         prize: ""
//     })

//     const dispatch = useDispatch()
//     const { id } = useParams()

//     useEffect(() => {
//         (async () => {
//             const data = await dispatch(getProductById(id))
            
//             setFormData({
//                 name: data.payload.product.name,
//                 description: data.payload.product.description,
//                 prize: data.payload.product.prize,
//             })
//         })()
        
//     }, [])

//     const onSubmit = (e) => {
//         e.preventDefault()

//         dispatch(updateProduct({id, product: formData}))
//         dispatch(reset())
//     }

//     const onChange = (e) => {
//         setFormData((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }))
//     }

//     const Style = {
//         input : {
//             border: "2px solid #ECECEC"
//         },
//         form : {
//             width: "50%",
//             margin: "2rem auto"
//         }
//     }

//     return (
        // <>
        // <Layout>
        //     <Container className='my-5'>
        //     <h1 style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center',  margin: '5rem 0 1rem'}}>Edit product</h1>

        //     <Form onSubmit={onSubmit} style={Style.form}>
        //         <Form.Group className="mb-3">
        //             <Form.Label>Nama Product</Form.Label>
        //             <Form.Control 
        //             type="text" 
        //             name='name'
        //             value={formData.name}
        //             onChange={onChange}
        //             style={Style.input} />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        //             <Form.Label>Deskripsi</Form.Label>
        //             <Form.Control 
        //             rows={5} 
        //             as="textarea" 
        //             name='description'
        //             value={formData.description}
        //             onChange={onChange}
        //             style={Style.input} />
        //         </Form.Group>
        //         <Form.Group className="mb-3">
        //             <Form.Label>Harga</Form.Label>
        //             <InputGroup>
        //                 <InputGroup.Text>Rp</InputGroup.Text>
        //                 <Form.Control 
        //                 type='number' 
        //                 name='prize'
        //                 value={formData.prize}
        //                 onChange={onChange}
        //                 style={Style.input} />
        //                 <InputGroup.Text>,00</InputGroup.Text>
        //             </InputGroup>
        //         </Form.Group>
        //         {/* <Form.Group controlId="formFileLg" className="mb-3">
        //             <Form.Label>Foto Lokasi</Form.Label>
        //             <Form.Control type="file" size="lg" multiple style={Style.input} />
        //         </Form.Group> */}
                
        //         <Button type='submit' className='py-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>Simpan</Button>
        //         <Button href='/home' className='py-3 w-100 my-3' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
        //     </Form>

        //     </Container>
        // </Layout>
        // </>
//     )
// }

// export default Product


import React, {Component} from "react";
import productService from "../features/product/productService";

export default class Product extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrize = this.onChangePrize.bind(this);
        this.getProduct = this.getProduct.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

        this.state = {
            currentProduct: {
                id: null,
                name: "",
                description: "",
                prize: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount(){
        this.getProduct(this.props.match.params.id);
    }

    onChangeName(e){
        const name = e.target.value;

        this.setState(function(prevState){
            return{
                currentProduct: {
                    ...prevState.currentProduct,
                    name:name
                }
            };
        });
    }

    onChangeDescription(e){
        const description = e.target.value;

        this.setState(function(prevState){
            return{
                currentProduct: {
                    ...prevState.currentProduct,
                    description:description
                }
            };
        });
    }

    onChangePrize(e){
        const prize = e.target.value;

        this.setState(function(prevState){
            return{
                currentProduct: {
                    ...prevState.currentProduct,
                    prize:prize
                }
            };
        });
    }

    getProduct(id){
        productService.get(id)
        .then(response => {
            this.setState({
                currentProduct: response.data
            });
            console.log(id);
        });
    }

    updatePublished(status){
        var data = {
            id: this.state.currentProduct.id,
            name: this.state.currentProduct.name,
            description: this.state.currentProduct.id,
            prize: this.state.currentProduct.prize,
            published: status
        };

    productService.update(this.state.currentProduct.id, data)
        .then(response => {
            this.setState(prevState => ({
                currentProduct: {
                    ...prevState.currentProduct,
                    published: status
                }
            }));
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    updateProduct(){
        productService.update(
            this.state.currentProduct.id,
            this.state.currentProduct
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The Product was update successfully"
                });
            }).catch(e => {
                console.log(e);
            });
    }

    deleteProduct(){
        productService.delete(this.state.currentProduct.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/products')
            }).catch(e => {
                console.log(e);
            });
    }

    render(){
        const{ currentProduct } = this.state;

        return(
            <div>
                {currentProduct ? (
                    <div className="edit-form">
                        <h4>Product</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nama</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentProduct.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Deskripsi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentProduct.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prize">prize</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentProduct.prize}
                                    onChange={this.onChangePrize}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                                {currentProduct.published ? "Published" : "Pending"}
                            </div>
                        </form>


                        {currentProduct.published ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(false)}
                            >UnPublish</button>
                        ) : (
                            <button
                                className="badge badge=primary mr-2"
                                onClick={() => this.updatePublished(true)}
                            >
                                publish
                            </button>
                        )}
                        <button className="badge badge-danger mr-2" onClick={this.deleteProduct}>
                            Delete
                        </button>

                        <button type="submit" className="badge badge-success" onClick={this.updateProduct} >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br/>
                        <p>Please click on a product</p>
                    </div>
                )}
            </div>
        );
    }
}
