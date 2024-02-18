import './Review.css';

const Review = ({review}) => {
    return (
        <div className="Review">
            <div className="product-review__item">
                <div className="name">{review.name}</div>
                <div className="comment">
                    {review.comment}
                </div>
                <div className="date">
                    Added at: <span className="text--date">{review.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Review;