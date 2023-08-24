import logo from './logo.svg';
import './App.css';
import Classcompo from './compo/Classcompo';
import Functioncompo, { FunctioncompoOne, FunctioncompoTwo } from './compo/Functioncompo';
import FuncStyle from './Style/FuncStyle';
import PropsCompo from './Day3/PropsCompo';
import Props4Compo from './Day4/Props4compo';

function App() {
  return (
    <div className="App">
      
      <h1 class="manih1">Styling Using Functional And Class Component </h1>
      <p class="pclass">To see styling in Class Component</p>
      
      <div class="container">
          <Classcompo />
          <Functioncompo />
      </div>    

      {/* <Functioncompo />
      <FunctioncompoOne />
      <FunctioncompoTwo />
      <FuncStyle /> */}
      <div className='day2'>
        <hr></hr>

        <h1>Date -- 23/08/2023</h1>
        <PropsCompo />
      </div>

      <div className='day4'>
        <hr></hr>

        <h1>Date -- 24/08/2023</h1>
        <Props4Compo />
      </div>
      
    </div>
  );
}

export default App;
