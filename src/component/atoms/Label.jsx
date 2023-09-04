const Label = ({ name, labelText }) => {
	return(
		<label htmlFor={name} className="block text-lg text-slate-800">
			{labelText}
		</label>
		);
}

export default Label;