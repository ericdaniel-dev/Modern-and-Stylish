import { useState } from 'react';
import Buttons from '../atoms/Buttons';
import CartIcon from '../../assets/cart.svg';
export default function Header(){
	const [total, setTotal] = useState(0);
	function clickTotal(){
		setTotal(total+1);
	}
	return(
		<header className="w-full h-auto border-b-2 border-gray-300">
			<div id="headers" className="flex p-3 items-center justify-between md:justify-around">
				<h1 className="text-xl md:text-2xl">Modern & Stylish</h1>
				<nav>
					<ul className="hidden md:flex p-2 gap-5 text-base font-medium">
						<li><a href="#">Home</a></li>
						<li><a href="#product-list">Product</a></li>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Contact Us</a></li>
					</ul>
				</nav>
				<span className="p-2 border-2 flex items-center gap-5">
					<Buttons text={CartIcon} onClick={clickTotal}>test</Buttons>
					<span>{total}</span>
				</span>
			</div>
		</header>
		);
}