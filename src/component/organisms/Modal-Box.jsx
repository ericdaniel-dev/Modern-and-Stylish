const ModalBox = ({ id, title, image, category, price }) => {
	return(
		<div id="show-modalbox" className="border-2 border-black w-3/4 h-3/4 rounded-xl p-3">
			<div id="exit-modal" className="float-right px-3 py-1 border-2 border-gray-300 rounded-full"> X </div>
			<div id="modal-box" className="p-5 flex gap-3 flex-col md:flex-row items-center">
				<div id="product-image" className="w-1/2 h-full bg-gray-300">
					<img src={image} alt={title}
						className="w-full h-full object-contain" 
						width="300px" height="320px"/>
				</div>
				<div id="description-item" className="border-2 w-1/2 h-full flex flex-col justify-around gap-5">
					<h2 className="text-2xl">{title}</h2>
					<span className="text-slate-600">{category}</span>
					<span className="text-lg">${price}.00</span>
					<span className="text-lg">Add To Chart</span>
				</div>
			</div>
		</div>
		);
}

export default ModalBox;