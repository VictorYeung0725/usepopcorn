import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App_v1 from './App-v1';
import App_v1 from './App_v1';

// function Test() {
//   const [numOfRating, setNumOfRating] = useState(0);
//   return (
//     <div>
//       <StartRating color="blue" maxRating={10} onSet={setNumOfRating} />
//       <p>This Movie was Rate {numOfRating} Stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StartRating
      maxRating={5}
      message={['Terrible', 'Bad', 'Ok', 'Nice', 'Amazing']}
    />
    <StartRating maxRating={10} color="red" defaultRating={3} />
    <Test /> */}
    <App_v1 />
  </React.StrictMode>
);
