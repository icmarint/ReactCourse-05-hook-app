import { fireEvent, render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Pruebas en <HomePage />', () => {
    test('debe mostrar el componente sin el usuario', () => {
        render( 
        <UserContext.Provider value={{ user: null}}>
            <HomePage />
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre') //aria-label

        console.log( preTag.innerHTML)

        expect( preTag.innerHTML ).toBe('null')

        screen.debug()
    })

})