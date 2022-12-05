import React, {Component} from "react";
import productService from "../features/product/productService";
import axios from "axios";
import { Link } from "react-router-dom";
import style from './layout.module.css';
import Success from '../assets/Checklist.jpg'

export default class ProductAdd extends Component{
  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrize = this.onChangePrize.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "",
      prize: "",
      published: false,
      submitted: false
    };
  }

  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    });
  }

  onChangePrize(e){
    this.setState({
      prize: e.target.value
    });
  }

  saveProduct(){
    var data = {
      name: this.state.name,
      description: this.state.description,
      prize: this.state.prize
    };
    console.log(data)

    axios.post('http://localhost:5000/api/products/', data,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
          this.setState({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            prize: response.data.prize,
            published: response.data.published,
            submitted: true
          });
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });

    // productService.create(data)
    //   .then(response => {
    //     this.setState({
    //       id: response.data.id,
    //       name: response.data.name,
    //       description: response.data.description,
    //       prize: response.data.prize,
    //       published: response.data.published,
    //       submitted: true
    //     });
    //     console.log(response.data);
    //   }).catch(e => {
    //     console.log(e);
    //   });

  }

  newProduct(){
    this.setState({
      id: null,
      name: "",
      description: "",
      prize: "",
      published: false,

      submitted: false
    });
  }

  

  render(){
    return(
      <div className="submit-form">
        {this.state.submitted ? (
          <div style={{textAlign:"center"}}>
            <h1 style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center',  margin: '5rem 0 1rem'}}>You Submitted Successfully!</h1>
            <div className={`${style.hero_image} ${"col-5"}`}>
                <img src={Success} alt="Success" width={632} height={666}/>
            </div>
           
            <button className="btn btn-success" onClick={this.newProduct} style={{background: '#4361EE', fontWeight: '500', TextAlign:"center"}}>Add</button>
            <Link to={"/home"}>
              <button className="btn btn-success" style={{background: '#4361EE', fontWeight: '500', TextAlign:"center"}}>Home</button>
            </Link>

          </div>
        ) : (
          <div style={{textAlign:"center"}}>
            <div className="mb-3" style={{width:"30%", margin:"2rem auto", textAlign:"center"}}>
              <label>Nama</label>
              <input
                type= "text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
                border="2px solid #ECECEC"
              />
            </div>

            <div className="mb-3" style={{width:"30%", margin:"2rem auto", textAlign:"center"}}>
              <label htmlFor="description">Description</label>
              <input
                type= "text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="mb-3" style={{width:"30%", margin:"2rem auto", textAlign:"center"}}>
              <label htmlFor="prize">Price</label>
              <input
                type= "text"
                className="form-control"
                id="prize"
                required
                value={this.state.prize}
                onChange={this.onChangePrize}
                name="prize"
              />
            </div>

            <button onClick={this.saveProduct} className="btn btn-success"  style={{background: '#4361EE', fontWeight: '500', TextAlign:"center"}}>
              Submit
            </button>
          </div>
          
        )}
      </div>
    );
  }
}



/*
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

*/