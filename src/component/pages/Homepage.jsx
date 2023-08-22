import Introduction from '../organisms/Introduction';
import Products from '../organisms/Products';

export default function Homepage(){
	return(
		<main className="flex flex-col gap-3">
			<Introduction/>
			<Products/>
		</main>
		);
}