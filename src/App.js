import React, { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState('');

  const handleInputTodo = (event) => setTodo(event.target.value)
  return (
    <>
      <input
        placeholder='type your todos here...'
        onChange={handleInputTodo}
        value={todo}
      />
    </>
  )
}

export default App
