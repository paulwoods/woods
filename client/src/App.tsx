import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useGreeting} from "./hooks/useGreeting.tsx";
import {useEffect} from "react";


export const App = () => {

    const {message, onFetch} = useGreeting()

    useEffect(() => {
        onFetch()
    })

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

            <button onClick={onFetch}>Greeting</button>
            <div>{JSON.stringify(message)}</div>

        </>
    )
}

