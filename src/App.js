import React, { Component } from 'react'

import  CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

import {APP,Title,Ul} from './indexStyled'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       courses: [
         {name:"HTML"},
         {name:"CSS"},
         {name:"Javascript"}
       ],
       current: ''
    }
  }
    //update course
    updateCourse = (e) => {
      console.log(e.target.value)
      this.setState({
        current: e.target.value
      })
    }
    //Add Course
    addCourse = (e) => {
      e.preventDefault()
      console.log("add Course")
      let current = this.state.current;
      let courses = this.state.courses;

      courses.push({
        name: current
      })
      this.setState({
        courses: courses,
        current: ''
      })
    }
    //Delete Course
    deleteCourse = (index) => {
      let courses = this.state.courses;
      courses.splice(index,1)
      this.setState({
        courses:courses
      })
        
    }
//edit Course
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index]
    course['name'] = value
    this.setState(
      {courses : courses}
    )
  }

  render() {
    const {courses} = this.state

    const courseList = courses.map((course,index) =>(
        <CourseList details={course} key={index} index={index}
         deleteCourse={this.deleteCourse} updateCourse= {this.updateCourse}
          current={this.state.current}  addCourse={this.addCourse} 
          editCourse={this.editCourse}/>
    ))
  
    return (
      <APP>
    
      <Title>Add Course  </Title>
          <CourseForm updateCourse= {this.updateCourse} 
          addCourse={this.addCourse} current={this.state.current}/>
          <Ul>
              {courseList}
          </Ul>
        
  </APP>
    )
  }
}

export default App

