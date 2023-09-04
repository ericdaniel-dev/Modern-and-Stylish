import { useState, useEffect } from 'react';
import ProductCards from './Product-Cards';
import DataProduct from '../../data/data-product.json';
import ModalBox from './Modal-Box';

export default function Products(){
	const [isLoading, setIsLoading] = useState(true);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [currentCat, setCurrentCat] = useState('featured');
	const [productModalId, setProductModalId] = useState(0);
	function setCat(newCat){
		setCurrentCat(newCat);
	}
	function openModal(id){
		setProductModalId(id);
		setIsOpenModal(true);
	}
	const myProduct = DataProduct;
	const testProduct = myProduct[0];
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);
	return(
		<section id="products" className="mt-5 flex flex-col items-center w-full h-auto border-2 border-gray-200 p-2">
			<ModalBox data={myProduct[productModalId]} isOpen={isOpenModal} setClose={() => setIsOpenModal(false)}/>
			<div id="productCat" className="w-full md:w-1/2 h-24 border-2 gap-1 md:gap-5 p-1 md:p-2 flex flex-row justify-around items-center">
				<button onClick={() => setCat('featured')} className="w-1/5 h-3/4 hover:border-2 hover:border-black hover:bg-black hover:text-white">Featured</button>
				<button onClick={() => setCat('clothes')} className="w-1/5 h-3/4 hover:border-2 hover:border-black hover:bg-black hover:text-white">Clothes</button>
				<button onClick={() => setCat('pants')} className="w-1/5 h-3/4 hover:border-2 hover:border-black hover:bg-black hover:text-white">Pants</button>
				<button onClick={() => setCat('watch')} className="w-1/5 h-3/4 hover:border-2 hover:border-black hover:bg-black hover:text-white">Watch</button>
				<button onClick={() => setCat('hats')} className="w-1/5 h-3/4 hover:border-2 hover:border-black hover:bg-black hover:text-white">Hats</button>
			</div>
			<div id="productBox" className="w-full flex flex-col items-center justify-center p-5 gap-5">
				<h2 className="text-2xl">Featured Products</h2>
				<div id="product-list" className="w-full flex items-center flex-wrap justify-center lg:justify-start gap-3">
					{myProduct.map((product, index) => (
						<ProductCards
							key={index}
							id={product.id}
							title={product.title}
							image={product.image}
							category={product.category}
							price={product.price}
							loading={isLoading}
							modal={() => openModal(product.id)}
							/>
						))}
				</div>
			</div>
		</section>
		);
}