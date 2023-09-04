import { useEffect } from 'react';

const ModalBox = ({ data, isOpen, setClose }) => {
	if(isOpen){
		return(
			<div id="show-modalbox" className="fixed z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black w-2/3 h-2/3 bg-white rounded-xl p-3">
			  <button id="exit-modal" onClick={setClose} className="float-right px-3 py-1 border-2 border-gray-300 rounded-full"> X </button>
			  <div id="modal-box" className="w-full h-full relative p-5 flex gap-3 flex-col md:flex-row items-center">
			    <div id="product-image" className="w-full md:w-3/4 h-[90%] bg-gray-300">
			      <img src={data.image} alt={data.title}
			        className="w-full h-full object-contain"/>
			    </div>
			    <div id="description-item" className="relative border-2 w-full md:w-3/4 h-3/4 flex flex-col justify-around gap-5 p-5">
			      <h2 className="text-2xl">{data.title}</h2>
			      <span className="text-slate-600">{data.category}</span>
			      <span className="text-lg">${data.price}.00</span>
			      <span className="text-lg">Add To Cart</span>
			    </div>
			  </div>
			</div>

			)
	}
	else{
		return(
			<div id="modalBox-closed"></div>
			);
	}
}

export default ModalBox;