import React, { Component } from 'react'
import {Span,Li,Button, ButtonFirst,ButtonLast,Form, Input} from '../indexStyled'

 class CourseList extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             isEdit:false
        }
    }
    
     renderCourse = () =>{
         return (
            <Li>
                <Span>{this.props.details.name}</Span>
               
                <ButtonFirst onClick={() =>this.toggleState()}>Edit Course</ButtonFirst>
                
                <ButtonLast onClick={()=> this.props.deleteCourse(this.props.index)}>Delete Course</ButtonLast>
            </Li>
         )
     }
     //render Update Form 
      renderUpdateForm = () => {
          return (
              <Form onSubmit={this.updateCourseItem}>
              <Input type='text' ref={(v) => this.input= v} defaultValue={this.props.details.name}/>
              <Button type='submit'>Update Course</Button>
              </Form>
          )
      }
      toggleState = () => {
          let {isEdit} = this.state 
          this.setState({
            isEdit: !isEdit
          }) 
                
      }
      //updateCourseItem 
      updateCourseItem = (e) =>{
        e.preventDefault()
        this.props.editCourse(this.props.index, this.input.value)
        this.toggleState()
      }

    render() {

        let {isEdit} = this.state 
        return (
            <React.Fragment>
                {isEdit ? this.renderUpdateForm() :this.renderCourse()}
            </React.Fragment>
        )
    }
}

export default CourseList
