//for using redux import actions
import React, { useEffect } from 'react'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux' //for dispatching our actions
import { STATUSES } from '../store/productSlice';


const Product = () => {

    const { data: products, status } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    // const [products, setProducts] = useState([])

    useEffect(() => {

        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json()
        //     setProduct(data);
        // }
        // fetchProducts()
    }, [])


    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if (status === STATUSES.LOADING) {
        return <div><h2>Loading...</h2></div>
    }


    if (status === STATUSES.ERROR) {
        return <div><h2>Something went wrong...</h2></div>
    }

    return (
        <div className='productsWrapper'>
            {
                products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className="btn" onClick={() => handleAdd(product)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Product