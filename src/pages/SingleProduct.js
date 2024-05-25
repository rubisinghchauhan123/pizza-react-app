import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../Product.json"

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };


  useEffect(() => {
    const getPizza = async () => {
      try {
        const pizza = Data.pizza.find(product => product.id === Number(params.id))
        setProduct(pizza)
      } catch (error) {
        console.error(error)
      }
    }
    getPizza()
  }, [params.id])
  

  return (
    <div className="container mx-auto mt-12">
      <button className=" mb-12px font-bold mb-12 " onClick={handleback} >Back</button>
      <div className="flex ju">
        <img className="w-64 h-64" src={product.image} alt="pizza" />
        <div className=" ml-16 ">
          <h2 className="text-lg font-bold py-2">{product.name}</h2>
          <div className="font-bold mt-12px"> {product.price} </div>
          <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct