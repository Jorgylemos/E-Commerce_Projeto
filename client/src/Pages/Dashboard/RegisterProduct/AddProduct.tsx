import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../../../../assets/styles/main.scss'

function AddProduct() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("");

    const addProduct = () => {
        Axios({
            method: 'POST',
            data: {
                title: title,
                price: price,
                description: description,
                image: image,
                category: category
            },
            url: 'http://52.204.139.5:5000/products'
        }).then((res) => {
            console.log(res)
        })
    }

    return (

        <div className='RegisterProduct'>
            <h1 style={{ marginBottom: '50px' }}>Add Product</h1>
            <div>
                <input type="text" placeholder='Título' autoFocus required onChange={(e) => setTitle(e.target.value)} /> {" "}
            </div>
            <div>
                <input type="number" placeholder='Preço' required onChange={(e) => setPrice(e.target.value)} /> {" "}
            </div>
            <div>
                <input type="text" placeholder='Descrição' required onChange={(e) => setDescription(e.target.value)} /> {" "}
            </div>
            <div>
                <input type="text" placeholder='Imagem' required onChange={(e) => setImage(e.target.value)} /> {" "}
            </div>
            <div>
                <input type="text" placeholder='Categoria' required onChange={(e) => setCategory(e.target.value)} /> {" "}
            </div>
            <div>
                <button onClick={addProduct}>Adicionar Produto</button>< br />
            </div>
            <Link to='/dashboard'>
                <button className='back-button'>Voltar</button>
            </Link>
        </div>

    )
}

export default AddProduct;