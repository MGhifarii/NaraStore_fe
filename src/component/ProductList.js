import React, {Component} from "react";
import productService from "../features/product/productService";
import {Link} from "react-router-dom";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProduct = this.setActiveProduct.bind(this);
        this.removeAllProduct = this.removeAllProduct.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            products: [],
            currentProduct: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount(){
        this.retrieveProducts();
    }

    onChangeSearchName(e){
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrieveProducts(){
        productService.getAll()
            .then(response => {
                this.setState({
                    products: response.data
                });
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            });
    }

    refreshList(){
        this.retrieveProducts();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }

    setActiveProduct(product, index){
        this.setState({
            currentProduct: product,
            currentIndex: index
        });
    }

    removeAllProduct(){
        productService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            }).catch(e => {
                console.log(e);
            });
    }

    searchName(){
        productService.findByName(this.state.searchName)
            .then(response => {
                this.setState({
                    products: response.data
                });
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            });
    }

    render(){
        const {searchName, products, currentProduct, currentIndex} = this.state;

        return(
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="search by name"
                            value={searchName}
                            onChange={this.onChangeSearchName}
                        />
                        <div className="input-group-append">
                            <button
                                classname="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchName}
                            >
                                search
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                   <h4>Product List</h4>
                   <ul>
                        {products &&
                            products.map((product, index) =>(
                                <li
                                className={"list-group-item" + (index === currentIndex ? "active" : "")} 
                                onClick={() => this.setActiveProduct(product, index)}
                                key={index}
                                >
                                    {product.name}
                                </li>
                            ))}
                    </ul>

                    <button className="m-3 btn btn-sm btn-danger" onClick={this.removeAllProduct}>
                        Remove All
                    </button> 
                </div>
                <div>
                    {currentProduct ? (
                        <div>
                            <h4>Product</h4>
                            <div>
                                <label>
                                    <strong>Product:</strong>
                                </label>{" "}
                                {currentProduct.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>
                                {currentProduct.description}
                            </div>
                            <div>
                                <label>
                                    <strong>Price:</strong>
                                </label>{" "}
                                {currentProduct.Prize}
                            </div>
                            <div>
                                <label>
                                    <strong>Status:</strong>
                                </label>{" "}
                                {currentProduct.published ? "published" : "pending"}
                            </div>

                            <Link to={"/products/" + currentProduct.id} className="badge badge-warning">
                            Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br/>
                            <p>Please click on a Product</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}