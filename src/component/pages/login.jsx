import Inputform from '../molecules/Inputform';
import Buttons from '../atoms/Buttons';

const Loginpage = () => {
	return(
		<section id="login" className="mt-10">
			<div id="loginPage" className="flex flex-col gap-5">
				<h1 className="text-2xl">Login Page</h1>
				<form className="flex flex-col gap-2">
					<Inputform name="email" type="text" id="email" labelText="Email" placeholder="example@gmail.com"/>
					<Inputform name="password" type="password" id="password" labelText="Password" placeholder="*******"/>
					<Buttons text="login" className='px-3 py-2 rounded-xl bg-blue-400'></Buttons>
				</form>				
			</div>
		</section>
		);
}

export default Loginpage;