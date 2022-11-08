import axios from "axios";

class ProductService {
    getAll(){
        return axios.get("/products");
    }

    get(id){
        return axios.get(`/products/${id}`);
    }

    create(data){
        console.log(data)
        return axios.post("/products", data);
    }

    update(id, data){
        return axios.put(`/products/${id}`, data);
    }

    delete(id){
        return axios.delete(`/products/${id}`);
    }

    deleteAll(){
        return axios.delete("/products");
    }

    findByName(name){
        return axios.get(`/products?name=${name}`);
    }
}

export default new ProductService();