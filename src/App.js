import './App.css';
import Counter from './features/Counter/Counter';
import store from './app/store';
import {Provider} from 'react-redux'
import Todolist from './features/Todolist/Todolist';
import Countries from './features/Countries/Countries';
import Books from './features/Books/Books';
function App() {
  return (
    <Provider store={store}>
      <div >
        <h1>Welcome to redux toolkit</h1>
        <Books></Books>
        <Counter></Counter>
        <Todolist></Todolist>
        <Countries></Countries>
      </div>
    </Provider>
  );
}
export default App;
