import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

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
        
        

        <button className="btn btn-primary" onClick={ () => increase() }>
            Next quote
        </button>

        
    </>
    )
}
