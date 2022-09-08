import store  from './redux/store/Store';
import { Provider } from 'react-redux';
import FoodBody from './components/foodBody/FoodBody';
import FoodHeader from './components/foodHeader/FoodHeader';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FoodHeader />
        <FoodBody />
      </div>
    </Provider>
  );
}

export default App;
