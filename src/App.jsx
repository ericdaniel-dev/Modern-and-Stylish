import './App.css';
import Header from './component/organisms/Header';
import Footer from './component/organisms/Footer';
import Introduction from './component/organisms/Introduction';
import Products from './component/organisms/Products';

function App() {
  return (
    <>
      <div id="containerBox" className="flex flex-col">
        <Header></Header>
        <main className="flex flex-col gap-3">
          <Introduction/>
          <Products/>
        </main>
        <Footer></Footer>
      </div>  
    </>
  )
}

export default App
