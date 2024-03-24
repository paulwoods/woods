import {useCallback, useState} from "react";
import axios, {AxiosError} from "axios";

export const useGreeting = () => {

    const [message, setMessage] = useState({})

    const onFetch = useCallback(() => {

        axios({
            method: "get",
            url: "/server",
        }).then(response => response.data)
            .then(setMessage)
            .catch((e: unknown) => {

                if (e instanceof AxiosError) {
                    if (e.response?.status === 401) {
                        // login
                        window.location.href = `http://localhost:8080/login`
                    }
                }

                console.log(e)
                setMessage(JSON.stringify(e))
            })

    }, [])

    return {message, onFetch}
}