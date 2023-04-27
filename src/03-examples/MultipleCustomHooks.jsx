import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://type.fit/api/quotes');

    const { counter, increase } = useCounter(1)

    const { text, author } = !!data && data [`${ counter }`]

    return (
    <>
        <h1>Quotes</h1>
        <hr/>

        {
            isLoading
            ? <LoadingQuote />
            : <Quote text={text} author={author} />
        }
        
        

        <button 
            className="btn btn-primary" 
            disabled={ isLoading }
            onClick={ () => increase() }>
            Next quote
        </button>

        
    </>
    )
}
