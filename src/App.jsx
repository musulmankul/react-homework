import { useEffect, useState } from "react";
import {ProductCard} from "./components/ProductCard";
import "./index.css"

function App() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .finally(()=>setLoading(false));
    }, []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            <div className="wrapper">
                {products.map((product) => (
                <ProductCard data={product} />
                ))}
            </div>
        </div>
    );
}

export default App;
