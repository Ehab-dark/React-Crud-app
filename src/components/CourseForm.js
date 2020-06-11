import React from 'react'
import {Input,Button,Form} from '../indexStyled'

const  CourseForm = (props) => {
 
    return (
       <div>
           <Form onSubmit={props.addCourse}>
               <Input type="text" onChange={props.updateCourse} value={props.current}/>
               <Button type="submit" >Add Course</Button>
           </Form>
           </div>
    )
}

export default CourseForm
