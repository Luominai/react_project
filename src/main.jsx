import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ArrayVisual from './ArrayVisual.jsx'
import PointerGuide from './PointerGuide.jsx'
import ClassGuide from './ClassGuide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('ArrayVisualRoot')).render(
    <React.StrictMode>
        <ArrayVisual />
    </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('PointerGuideRoot')).render(
    <React.StrictMode>
        <PointerGuide />
    </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('ClassGuideRoot')).render(
   <React.StrictMode>
         <ClassGuide />
   </React.StrictMode>,
)