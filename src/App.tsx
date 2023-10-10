import './App.css';
import {HW1} from './HW/1/HW1';
import {HW2} from './HW/2/HW2';
import {HW3} from './HW/3/HW3';
import {HW4} from './HW/4/HW4';
import {Counter} from "./counter/Counter";
import {CounterWithRedax} from "./counterWithRedax/CounterWithRedax";
import {Provider} from "react-redux";
import {store} from "./counterWithRedax/state/store";


function App() {
    return (
        <div className="App">
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            {/*<Counter />*/}
            <Provider store={store}>
            <CounterWithRedax/>
            </Provider>
        </div>
    );
}

export default App;
