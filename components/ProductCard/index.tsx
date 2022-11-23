import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../../utils/price";
import { useCart } from "medusa-react";

const ProductCard = ({ product }) => {
  const { cart } = useCart();

  return (
    <Link
      href={`/products/${product?.handle}`}
      className="bg-gray-100 hover:bg-gray-200"
    >
      <div className="relative w-full min-h-[350px]">
        <Image
          className="mix-blend-darken object-contain"
          src={product?.thumbnail}
          alt={product?.title}
          fill
          sizes="(max-width: 768px) 50vw,
          25vw"
        />
        <section className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2">
          <h4 className="text-base font-normal">{product?.title}</h4>
          <h5 className="text-base font-normal">
            {formatPrice(product.variants[0], cart)}
          </h5>
        </section>
      </div>
    </Link>
  );
};

export default ProductCard;
