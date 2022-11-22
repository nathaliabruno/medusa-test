import Image from "next/image";
import Link from "next/link";
import { priceFormat } from "../../utils/price";

const ProductCard = ({ product }) => {
  return (
    <Link href={product?.url} className="bg-gray-400">
      <div className="relative w-[300px]">
        <Image
          src={product?.image.url}
          alt={product?.title}
          width={product?.image?.width || "300"}
          height={product?.image?.height || "300"}
        />
        <section className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2">
          <h4 className="text-base font-normal">{product?.title}</h4>
          <h5 className="text-base font-normal">
            {product.price && priceFormat(product.price)}
          </h5>
        </section>
      </div>
    </Link>
  );
};

export default ProductCard;
