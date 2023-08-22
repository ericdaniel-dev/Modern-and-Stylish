import './App.css';
import Header from './component/organisms/Header';
import Footer from './component/organisms/Footer';

function App({ pages }) {
  return (
    <>
      <div id="containerBox" className="flex flex-col items-center">
        <Header></Header>
        {pages}
        <Footer></Footer>
      </div>  
    </>
  )
}

export default App;
