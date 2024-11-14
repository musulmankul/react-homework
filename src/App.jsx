import {ProductCard} from "./components/ProductCard";

const products = [
    {
        id: 0,
        name: "Product 1",
        category: "Category 1",
        price: 200,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhadelMSJi32_CDXbYMPiUYGl9nuQNYCQdJg&s"

    },
    {
        id: 1,
        name: "Product 2",
        category: "Category 1",
        price: 100,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Daewoo_Nexia_front_20071228.jpg/1200px-Daewoo_Nexia_front_20071228.jpg"

    },
]

function App() {
    return (
        <div>
            {products.map((product) => (
              <ProductCard data={product} />
            ))}
        </div>
    );
}

export default App;
