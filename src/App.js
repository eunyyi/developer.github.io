import ReactFullpage from '@fullpage/react-fullpage';
import { Route, Routes, Link } from 'react-router-dom';
import { Page1 } from './page/page1';
import './reset.css';
import { Page2 } from './page/page2';
import { Page3 } from './page/page3';
import { Page4 } from './page/page4';
import { Page5 } from './page/page5';
import { Page6 } from './page/page6';
import { Page7 } from './page/page7';
import { Page8 } from './page/page8';
import { Page9 } from './page/page9';
import { Page10 } from './page/page10';
import { Page11 } from './page/page11';
import { Page12 } from './page/page12';
import { Page13 } from './page/page13';
import { Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Page14 } from './page/page14';
import { Page15 } from './page/page15';

function App() {
  return (
    <div className="App">
      <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Page1/>
            {/* <button onClick={() => fullpageApi.moveSectionDown()}> */}
            {/* </button> */}
          </div>
          <div className="section">
            <Page2/>
          </div>
          <div className="section">
            <Page3/>
          </div>
          <div className="section">
            <Page4/>
          </div>
          <div className="section">
            <Page5/>
          </div>
          <div className="section">
            <Page6/>
          </div>
          <div className="section">
            <Page7/>
          </div>
          <div className="section">
            <Page8/>
          </div>
          <div className="section">
            <Page9/>
          </div>
          <div className="section">
            <Page10/>
          </div>
          <div className="section">
            <Page11/>
          </div>
          <div className="section">
            <Page12/>
          </div>
          <div className="section">
            <Page13/>
          </div>
          <div className="section">
            <Page14/>
          </div>
          <div className="section">
            <Page15/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />

    </div>
  );
}

// function App() {
//   return (
//     <Router>
//               <ReactFullpage
//                 licenseKey={'YOUR_KEY_HERE'}
//                 scrollingSpeed={1000}
//                 render={({ state, fullpageApi }) => (
//                   <ReactFullpage.Wrapper>
//                     <div className="section">
//                       <Switch>
//                         <Route path="/page1" component={Page1} />
//                         <Route path="/page2" component={Page2} />
//                         <Route path="/page3" component={Page3} />
//                       </Switch>
//                     </div>
//                   </ReactFullpage.Wrapper>
//                 )}
//               />
//     </Router>
//   );
// }

export default App;
