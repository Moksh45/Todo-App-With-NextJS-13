import React from 'react'
import Form from "./adTodoForm"

const page = () => {
    return (
        <div className='container'>
            <Form />
            <section className='todosContainer'></section>
        </div>
    );
}

export default page