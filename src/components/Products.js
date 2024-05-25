import Newproduct from './Newproduct'
import { useState, useEffect } from 'react'
import Data from "../Product.json"
// import { CartContext } from '../CartContext'

const Products = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const getPizzaData = async () => {
      try {
        const response = Data.pizza
        setProducts(response)
      } catch (error) {
        console.error(error)
      }
    }
    getPizzaData()
  }, [])

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8" >Products </h1>
      <div className="grid grid-cols-4 my-8 gap-24 ">
        {
          products.map(product => <Newproduct key={product.id} Newproduct={product} />)
        }
      </div>
    </div>
  )
}

export default Products