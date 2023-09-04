const Buttons = ({ text, className='border-2 border-black px-2 py-1 rounded-xl', onClick="None"}) => {
	if(text.includes('/')){
		if(onClick=="None"){
			return(
				<button className={className}>
					<img src={text} width="20px" height="20px" alt="icons"/>
				</button>
			);
		}
		else{
			return(
				<button className={className} onClick={onClick}>
					<img src={text} width="20px" height="20px" alt="icons"/>
				</button>
			);
		}
	}
	else{
		if(onClick=="None"){
			return(
				<button className={className}>
					{text}
				</button>
			);
		}
		else{
			return(
				<button className={className} onClick={onClick}>
					{text}
				</button>
			);
		}
	}
}

export default Buttons;