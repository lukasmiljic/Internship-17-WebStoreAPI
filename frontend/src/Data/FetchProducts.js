const BASE_URL = "https://fakestoreapi.com";

const fetchProducts = async (params) => {
  return (await fetch(`${BASE_URL}/products/${params}`)).json();
};

export default fetchProducts;
