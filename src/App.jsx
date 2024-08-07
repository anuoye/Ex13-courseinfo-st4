const Header = (props) =>{
 
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )

}






const Content = (props) => {
  
  return (
    <div>
      <p>{props.parts[0]}</p>
      <p>{props.parts[1]}</p>
      <p>{props.parts[2]}</p>
      
    </div>
  )
}

 





const Total = (props) => {
  return (
    <div>
      <p>{props.total}</p>
    </div>
  )
}








const App = () => {
 
  const course = 'Half Stack application development'
  const parts = [
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
   const total =  10 + 7 + 14 
console.log(parts)
console.log(total)
  return (
    <div>
      <Header course={course} />
      <Content parts={parts.name} />
      <Content parts={parts.exercises}/>
      <Total total={total} />
    </div>
  )
}

export default App


