const Todo = ( {todo} ) => {

    return (
        <div className="todo">
            <div className="content">
                <p key={todo.id}> {todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button className='complete'>Complementar</button>
                <button className='remove'>X</button>
            </div>
        </div>
    )
}

export default Todo