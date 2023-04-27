import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => { 
    test('debe retornar los valores por defecto', () => { 
        const { result } = renderHook( () => useCounter())
        const { counter, decrease, increase, reset } = result.current;

        expect( counter ).toBe(10)
        expect( decrease ).toEqual( expect.any( Function ))
        expect( increase ).toEqual( expect.any( Function ))
        expect( reset ).toEqual( expect.any( Function ))
    });

    test('debe generar el counter con el valor de 100', () => { 
        const { result } = renderHook( () => useCounter(100))
        expect( result.current.counter ).toBe(100)
    });

    test('debe incrementar el contador', () => {
        const { result } = renderHook( () => useCounter(100))
        const { counter, increase } = result.current;

        act( () => {
            increase();
            increase(2);
        })

        expect( result.current.counter ).toBe(103)
    })

    test('debe incrementar el contador', () => {
        const { result } = renderHook( () => useCounter(100))
        const { counter, decrease } = result.current;

        act( () => {
            decrease();
            decrease(2);
        })

        expect( result.current.counter ).toBe(97)
    });

    test('debe realizar el reset', () => {
        const { result } = renderHook( () => useCounter(100))
        const { counter, reset, decrease } = result.current;

        act( () => {
            decrease(20)
            reset();
        })

        expect( result.current.counter ).toBe(100)
    })

});