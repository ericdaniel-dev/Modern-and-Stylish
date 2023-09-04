import Label from '../atoms/Label.jsx';
import Input from '../atoms/Input.jsx';

const Inputform = ({ name, labelText, placeholder, type, id }) => {
	return(
		<>
			<Label label={name} labelText={labelText}/>
			<Input type={type} name={name} id={id} placeholder={placeholder}></Input>
		</>
		);
}

export default Inputform;