import Products from "../components/Products"
import { useNavigate } from 'react-router-dom';



const ProductsPage = () => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto mt-12">
      <button className=" mb-12px font-bold mb-12 " onClick={backButton}>Back</button>
      <Products />
    </div>
  )
}

export default ProductsPage