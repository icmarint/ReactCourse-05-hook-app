import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increase = ( value = 1 ) => {
        setCounter( (current) => current + value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    const decrease = ( value = 1 ) => {
        setCounter( (current) => current - value );
    }

    return{
        counter,
        increase,
        reset,
        decrease
    }
}