import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create new gig
const createProduct = async (data, token, id) => {
  const response = await axios.post(`${API_URL}/gig`, 
  {
    owner_id: id,
    location: data.location,
    fee: data.fee,
    title: data.title,
    description: data.description
  }, 
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Get all gigs
const getAllProduct = async () => {
  const response = await axios.get(`${API_URL}/products`);

  return response.data;
}

// Get gig by id
const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);

  return response.data;
}

// Update gig
const updateProduct = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/products/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

// Delete gig
const deleteProduct = async (id, token) => {
  const response = await axios.delete(`${API_URL}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

const ProductService = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct
}

export default ProductService;


// import axios from "axios";

// class ProductService {
//     getAll(){
//         return axios.get("/products");
//     }

//     get(id){
//         return axios.get(`/products/${id}`);
//     }

//     create(data){
//         console.log(data)
//         return axios.post("/products", data);
//     }

//     update(id, data){
//         return axios.put(`/products/${id}`, data);
//     }

//     delete(id){
//         return axios.delete(`/products/${id}`);
//     }

//     deleteAll(){
//         return axios.delete("/products");
//     }

//     findByName(name){
//         return axios.get(`/products?name=${name}`);
//     }
// }

// export default new ProductService();