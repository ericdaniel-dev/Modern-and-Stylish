const Buttons = ({ text, className='border-2 border-black px-2 py-1 rounded-xl', onClick }) => {
	if(text.includes('/')){
		return(
			<button className={className} onClick={onClick}>
				<img src={text} width="20px" height="20px" alt="icons"/>
			</button>
			);
	}
	else{
		return(
			<button className={className}>{text}</button>
			);
	}
}

export default Buttons;