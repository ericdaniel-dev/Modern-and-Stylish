const ProductCards = ({ id, title, image, category, price, loading }) => {
  return (
    <div id="product-card" className="flex flex-col w-[310px] h-[340px] border-2 border-gray-300 rounded-lg p-2">
      {loading ? (
        <div id="product-card" className="flex flex-col w-full h-full gap-2">
          <div id="Product-images" className="animate-pulse w-full h-3/4 bg-gray-300">
          .
          </div>
          <span className="animate-pulse border-2 p-2 bg-gray-300"> </span>
          <span className="animate-pulse border-2 p-2 bg-gray-300"> </span>
          <span className="animate-pulse border-2 p-2 bg-gray-300"> </span>
        </div>
      ) : (
        <div id="product-card" className="flex flex-col w-full h-full gap-2">
          <div id="Product-images" className="w-full h-3/4">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <span className="text-xl">{title}</span>
          <span className="text-base text-slate-700">{category}</span>
          <span className="text-xl">${price}</span>
        </div>
      )}
    </div>
  );
};

export default ProductCards;