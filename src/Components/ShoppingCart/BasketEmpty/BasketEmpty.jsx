import {Link} from "react-router-dom";

const BasketEmpty = () => {
    return (
        <div className="BasketEmpty">
            <h3>The basket is empty</h3>
            <Link to='/shop'>Choose a product &rarr;</Link>
        </div>
    )
}

export default BasketEmpty;