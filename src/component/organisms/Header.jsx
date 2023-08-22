import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Buttons from '../atoms/Buttons';
import CartIcon from '../../assets/cart.svg';
export default function Header(){
	return(
		<header className="w-full h-auto border-b-2 border-gray-300">
			<div id="headers" className="flex p-3 items-center justify-between md:justify-around">
				<h1 className="text-xl md:text-2xl">Modern & Stylish</h1>
				<nav>
					<ul className="hidden md:flex p-2 gap-5 text-base font-medium">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/#product-list">Product</Link></li>
						<li><Link to="#">About Us</Link></li>
						<li><Link to="#">Contact Us</Link></li>
					</ul>
				</nav>
				<Link to="/cart" className="p-2 border-2 flex items-center gap-5">
					<Buttons text={CartIcon}>test</Buttons>
					<span> 0 </span>
				</Link>
			</div>
		</header>
		);
}