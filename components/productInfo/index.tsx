import Button from "../button";
import { formatPrice } from "../../utils/price";
import { useCart, useCreateLineItem } from "medusa-react";
import { useState } from "react";
import ProductOptions from "../productOptions";

const ProductInfo = ({ product, ...other }) => {
  const { title, variants, description } = product;
  const [options, setOptions] = useState({});
  const { cart } = useCart();
  const { mutate } = useCreateLineItem(cart?.id!);

  const updateOptions = (update) => {
    setOptions({ ...options, ...update });
  };
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

  console.log(options);

  return (
    <div {...other}>
      <h1 className="text-4xl font-bold my-5">{title}</h1>
      <p className="text-2xl text-gray-600 my-5">
        {formatPrice(variants[0], cart)}
      </p>
      <p className="text-xl my-5">{description}</p>

      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {product.options.map((option) => {
            return (
              <div key={option.id}>
                <ProductOptions
                  option={option}
                  updateOption={updateOptions}
                  current={options[option.id]}
                  title={option.title}
                />
              </div>
            );
          })}
        </div>
      )}

      <Button text="add to cart" icon="+" onClick={addItem} />
    </div>
  );
};

export default ProductInfo;
