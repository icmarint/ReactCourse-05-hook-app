import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch')


describe('Pruebas en <MultipleCustomHooks/>', () => {
    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <MultipleCustomHooks />);
        
        expect( screen.getByText( 'Loading...'))
        
        const nextButton = screen.getByRole('button', { name: 'Next quote'})

        expect( nextButton.disabled).toBeTruthy();

        screen.debug()
    });

    /* test('debe mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Isabel', text: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render( <MultipleCustomHooks /> );
        screen.debug;
    }); */

    test('debe llamar la función de incrementar', () => {
        
    })

});