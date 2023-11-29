import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getProducts } from './redux/ProductSlice';

function App() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.products.loading)
  const products = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className="App">
      {loading ? <h1>En cours de chargement</h1> :
        products.map(p =>
          <h1>{p.title}</h1>
        )
      }
    </div>
  );
}

export default App;
