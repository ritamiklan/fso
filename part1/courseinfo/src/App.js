import React from "react"

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
} 

const Part = (props) => {
  return(
  <div>
    <p>{props.part}</p>
    <p>{props.exercise}</p>
  </div>
  )
}

const Content = () => {
  return(
    <div>
      <Part part = 'Fundamentals of React' exercise = {10} />
      <Part part = 'Using props to pass data' exercise = {7} />
      <Part part = 'State of a component' exercise = {14} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const App = () => {
   // const course = 'Half Stack application development'
   // const part1 = 'Fundamentals of React'
   // const exercises1 = 10
   // const part2 = 'Using props to pass data'
   // const exercises2 = 7
   // const part3 = 'State of a component'
   // const exercises3 = 14

  return (
    <div>
      <Header course = 'Half Stack application development'/>
      <Content />
      <Total ex1={10} ex2={7} ex3={14} />
    </div>
  )
}
  
export default App