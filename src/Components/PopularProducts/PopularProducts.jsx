import './PopularProducts.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {setPopularProducts} from "../../data/reducers/shopReducer";
import PopularCard from "./PopularCard/PopularCard";

const PopularProducts = () => {

    const popularProducts = useSelector(state => state.shop.popularProducts);
    let dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => dispatch(setPopularProducts(response.data)))
    }, []);

  return (
      <div className="PopularProducts">
          <h2 className="side-title">Popular products</h2>
          <div className="Products">
          {
              popularProducts.slice(0, 4).map(popularProduct => <PopularCard popularProduct={popularProduct} key={popularProduct.id}/>)
          }
          </div>
      </div>
  )
}

export default PopularProducts;