import './App.css';
import Counter from './features/Counter/Counter';
import store from './app/store';
import {Provider} from 'react-redux'
import Todolist from './features/Todolist/Todolist';
function App() {
  return (
    <Provider store={store}>
      <div >
        <h1>Welcome to redux toolkit</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}
export default App;
