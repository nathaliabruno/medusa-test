import Image from "next/image";

const ProductGallery = ({ gallery, ...other }) => {
  return (
    <>
      <div {...other}>
        {gallery.map((image) => (
          <div key={image.id} className="relative w-full min-h-screen">
            <Image
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw,
          25vw"
              src={image.url}
              alt="product image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGallery;
