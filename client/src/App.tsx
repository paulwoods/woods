import './App.css'
import {useGreeting} from "./hooks/useGreeting.tsx";
import {useEffect} from "react";


export const App = () => {

    const {message, onFetch} = useGreeting()

    useEffect(() => {
        onFetch()
    }, [])

    return (
        <>
            <div>{JSON.stringify(message)}</div>

        </>
    )
}

