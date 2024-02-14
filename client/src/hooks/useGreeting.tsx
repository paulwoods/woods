import {useCallback, useState} from "react";
import axios from "axios";

export const useGreeting = () => {

    const [message, setMessage] = useState({})

    const onFetch = useCallback(() => {

        axios({
            method: "get",
            url: "/server",
        }).then(response => response.data)
            .then(setMessage)
            .catch(setMessage)

    }, [])

    return {message, onFetch}
}