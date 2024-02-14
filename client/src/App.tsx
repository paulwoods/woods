import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {

    const [message, setMessage] = useState({})

    const handleClick = () => {

        axios({
            method: "get",
            url: "/server",
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        }).then(response => response.data)
            .then(setMessage)
            .catch(setMessage)
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>

            <button onClick={handleClick}>Greeting</button>
            <div>{JSON.stringify(message)}</div>

        </>
    )
}

export default App
