
const Header = (props) => {
  return(
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
      {props.parts} {props.excercises}
      </p>
    </div>
  )
}
const Content = (props) => {
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

  return(
    <div>
      <Part parts = {part1}  excercises = {exercises1} />
      <Part parts = {part2}  excercises = {exercises2} />
      <Part parts = {part3}  excercises = {exercises3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p> Number of excercises {props.excercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content   />
     
      <Total excercises = {exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App
