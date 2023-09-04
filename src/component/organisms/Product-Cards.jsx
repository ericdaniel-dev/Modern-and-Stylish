import SearchIcon from '../../assets/search icon.svg';
import AddToChartIcon from '../../assets/add to chart.svg';

const ProductCards = ({ id, title, image, category, price, loading, modal }) => {
  return (
    <div id="product-card" className="flex flex-col w-[310px] border-2 border-gray-300 hover:border-gray-400 rounded-xl p-2">
      {loading ? (
        <div id="product-card" className="flex flex-col w-full h-[350px] gap-2 p-2">
          <div id="Product-images" className="animate-pulse w-full h-3/4 bg-gray-300 rounded-lg">
          .
          </div>
          <span className="animate-pulse border-2 p-2 bg-gray-300 rounded-lg"> </span>
          <span className="animate-pulse border-2 p-2 bg-gray-300 rounded-lg"> </span>
          <span className="animate-pulse border-2 p-2 bg-gray-300 rounded-lg"> </span>
        </div>
      ) : (
        <div id="product-card" className="flex flex-col w-full justify-between gap-2 h-[350px] p-2">
          <div id="Product-images" className="w-full h-3/4">
            <img src={image} alt={title} className="w-full h-full object-contain rounded-lg" />
          </div>
          <div id="product-description" className="w-full h-1/4 flex flex-col">
            <span className="text-xl">{title}</span>
            <span className="text-base text-slate-700">{category}</span>
            <div className="w-full h-auto flex flex-row items-center justify-between">
              <span className="text-xl">${price}</span>
              <div className="flex gap-2">
                <button onClick={modal} className="hover:bg-gray-50 rounded-full w-[26px] h-[26px]">
                  <img src={SearchIcon} alt="preview product" width="23px" height="23px"/>
                </button>
                <button className="hover:bg-gray-50 rounded-full w-[26px] h-[26px]">
                  <img src={AddToChartIcon} alt="add product to chart" width="23px" height="23px"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCards;