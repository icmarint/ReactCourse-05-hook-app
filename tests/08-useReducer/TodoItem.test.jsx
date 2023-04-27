import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el <TodoItem />', () => {
    
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el Todo Pendiente de Completar', () => {
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');

        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
        
        const spanElement = screen.getByLabelText('span');

        expect( spanElement.className ).toContain('alingn-self-center')

        //screen.debug();

    });

    test('debe mostrar el Todo Completado', () => {
        
        todo.done = true;
        
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through')

        //screen.debug();

    });

    test('span debe llamar el ToggleTodo cuando se hace click', () => {
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

    });

    test('span debe llamar el DeleteTodo', () => {
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
            />
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

    })
})