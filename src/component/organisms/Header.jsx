import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Buttons from '../atoms/Buttons';
import CartIcon from '../../assets/cart.svg';

const handleLogout = () => {
	localStorage.removeItem('email');
	window.location.href = '/';
}
const AuthDisplay = () => {
	if(localStorage.getItem('email')===null){
		return(
			<ul className="flex flex-row gap-5">
				<li className="text-blue-500"><Link to='/login'>Login</Link></li>
				<li className="text-blue-500"><Link to='/register'>Register</Link></li>
			</ul>
		);
	}
	else{
		return(
			<ul className="flex flex-row gap-5">
				<li className="text-blue-500">{localStorage.getItem('email')}</li>
				<li className="text-blue-500"><button onClick={handleLogout}>Logout</button></li>
			</ul>
			)
	}
}

export default function Header(){
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const hamburgerMenu = () => {
		const navMenu = document.getElementById('navmenu');
		if(isMenuOpen===false){
			navmenu.classList.remove('hidden');
			navMenu.classList.add('flex', 'flex-row-reverse', 'w-full', 'h-full', 'fixed', 'bg-white', 'z-11', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'left-1/2', 'top-1/2');
			setIsMenuOpen(true);
		}
		else{
			navmenu.classList.add('hidden');
			navMenu.classList.remove('flex', 'flex-row-reverse', 'w-full', 'h-full', 'fixed', 'bg-white', 'z-11', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'left-1/2', 'top-1/2');
			setIsMenuOpen(false);
		}
	}
	return(
		<header className="fixed w-full h-auto border-b-2 border-gray-300 bg-white bg-opacity-95">
			<div id="headers" className="flex p-3 items-center justify-between">
				<button onClick={() => hamburgerMenu()} className="inline-block md:hidden border-2 border-gray-200 p-3">☰</button>
				<Link to="/"><h1 className="text-lg md:text-2xl">Modern & Stylish</h1></Link>
				<nav id="navmenu" className="hidden md:inline-block p-5 md:p-0">
					<button onClick={() => hamburgerMenu()} className="flex md:hidden items-center justify-center p-5 border-2 border-black w-[30px] h-[30px] p-3">X</button>
					<ul className="flex flex-col md:flex-row p-2 gap-5 text-base font-medium w-3/4 md:w-auto">
						<li><Link to="/">Home</Link></li>
						<li><a href="/#productBox">Product</a></li>
						<li><Link to="#">About Us</Link></li>
						<li><Link to="#">Contact Us</Link></li>
						<hr/>
						<div className="inline-block md:hidden">
							<AuthDisplay/>
						</div>
					</ul>
				</nav>
				<div className="flex flex-row items-center gap-3">
					<Link to="/cart" className="p-2 border-2 flex items-center gap-5">
						<Buttons text={CartIcon}>test</Buttons>
						<span> 0 </span>
					</Link>
					<div className="hidden md:inline-block">
						<AuthDisplay/>
					</div>
				</div>
			</div>
		</header>
		);
}