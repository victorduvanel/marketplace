import { useState, useEffect } from "react";
import { allProducts } from "../actions/products";
import SmallCard from "../components/cards/SmallCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadAllproducts();
  }, []);

  const loadAllproducts = async () => {
    let res = await allProducts();
    setProducts(res.data);
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Tous les produits à vendre</h1>
      </div>
      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(products, null, 4)}</pre> */}
        {products.map((p) => (
          <SmallCard key={p._id} p={p} />
        ))}
      </div>
    </>
  );
};
export default Home;
