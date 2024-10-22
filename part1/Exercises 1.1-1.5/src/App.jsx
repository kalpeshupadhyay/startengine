import Content from "./components/Content"
import Courses from "./components/Courses"
import Total from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const tot = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <div>
      <h2><Courses course = {course.name}/></h2>
      <Content />
      <Total exercises={tot}/>
    </div>
  )
}
export default App