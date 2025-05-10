// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import store from '../src/store.js';

// createRoot(document.getElementById('root')).render(
//   <StrictMode  >
//     <Provider store={store}>

//       <App />
//     </Provider>


//   </StrictMode>,
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store.js'
// import store from './src/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap Provider inside StrictMode */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
