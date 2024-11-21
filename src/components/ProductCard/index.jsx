import "./index.css"

export function ProductCard(props) {
    const { image, category, title, price} = props.data;
  
    return (
      <div className="product-card">
          <img width="200" src={image} alt='' />
          <div className="category">{category}</div>
          <h4>{title}</h4>
          <div className="priceandbutton">
            <div>{price}</div>
            <button>Add to cart</button>
          </div>
      </div>
    )
};