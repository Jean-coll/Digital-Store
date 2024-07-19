import ProductCard from "../product-card/ProductCard.jsx";
import Product from "./ProductItens.jsx";


const ProductListing = () => {
  let cards = []
  for (let i = 0; i < Product.length; i++){

    cards.push (<ProductCard props={Product[i]} />)

  }
  return  <div className="flex flex-wrap gap-4 "> {cards} </div>
 
}

export default ProductListing