
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

  const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.name}</h1>
      </>
    )
  }

  const Content = (props) => {
    console.log(props)
        return (
      <>
        <p>{props.name} {props.exercises}</p>
        <p> {props.name1} {props.exercises1}</p>
        <p>{props.name2} {props.exercises2}</p>
        
      </>
    )
  }

const Total = (props) => {
    console.log(props.exercises)
    return (
      <>
        <p>Number of exercises: {props.exercises} </p>
      </>
    )
  }
  

  return (
    <div>
      <Header name={course.name} />

      <Content name={course.parts[0].name} exercises={course.parts[0].exercises}
      name1={course.parts[1].name} exercises1={course.parts[1].exercises}
      name2={course.parts[2].name} exercises2={course.parts[2].exercises} />
        
      {/*<Content parts={course.parts} /> 
      <Total parts={course.parts} />      <p>
       {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p> */}
      <Total exercises = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>

      {/*<Header course.name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />*/}
   </div>
  )
}

export default App
