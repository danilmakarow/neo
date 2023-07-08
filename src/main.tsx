import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store' // убедись, что путь до файла store правильный

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="height-100vh">
                <App />
            </div>
        </Provider>
    </React.StrictMode>,
)
