import { useState, useEffect } from 'react';
import ProductCards from './Product-Cards';
import DataProduct from '../../data/data-product.json';

export default function Products(){
	const [isLoading, setIsLoading] = useState(true);
	const myProduct = DataProduct;
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);
	return(
		<section id="products" className="w-full h-auto border-2 border-gray-200">
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
							/>
						))}
				</div>
			</div>	
		</section>
		);
}