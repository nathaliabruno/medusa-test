import { formatPrice } from "../../utils/price";
const ProductInfo = ({ product, cart, ...other }) => {
  const { title, variants, description } = product;
  return (
    <div {...other}>
      <h1>{title}</h1>
      <p>{description}</p>
      {formatPrice(variants[0], cart)}
    </div>
  );
};

export default ProductInfo;
