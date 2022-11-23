import Button from "../button";
import { formatPrice } from "../../utils/price";
import { useCart, useCreateLineItem } from "medusa-react";

const ProductInfo = ({ product, ...other }) => {
  const { title, variants, description } = product;
  const { cart } = useCart();
  const { mutate } = useCreateLineItem(cart?.id!);

  const addItem = () => {
    mutate(
      {
        variant_id: product?.variants[0].id!,
        quantity: 1,
      },
      {
        onSuccess: () => {
          console.log("added");
        },
      }
    );
  };

  return (
    <div {...other}>
      <h1 className="text-4xl font-bold my-5">{title}</h1>
      <p className="text-2xl text-gray-600 my-5">
        {formatPrice(variants[0], cart)}
      </p>
      <p className="text-xl my-5">{description}</p>

      <Button text="add to cart" icon="+" onClick={addItem} />
    </div>
  );
};

export default ProductInfo;
