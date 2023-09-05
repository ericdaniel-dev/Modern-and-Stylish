const Input = ({ type, name, placeholder="", id }) => {
	return(
		<input type={type} name={name} id={id} placeholder={placeholder} autoComplete="`current-${name}`" className="border-2 px-4 py-2 rounded-lg focus:border-blue-300"></input>
		);
}

export default Input;