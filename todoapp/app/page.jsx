import React from 'react'
import Form from "./addTodoForm"
import { TodoItem } from '@/components/ServerComponent';

const page = () => {
    return (
        <div className='container'>
            <Form />
            <section className='todosContainer'>
                <TodoItem title={"Sample Task"}
                    description={"Sample Description"}
                    id={"sampleId"}
                    completed={false}
                />
            </section>
        </div>
    );
}

export default page