import './App.css'

function App() {
  function handleClick(){
    alert('i am clicked')
  }

  function handleOver(){
    alert('para ek uppar mouse leke aaye ho')
  }

  function handleInputChange(e){
    console.log('Input mein value change hui h')
    console.log('Value Till Now : ',e.target.value)
    console.log('Value Length : ',(e.target.value.length))
  }

  function handleSubmit(e){
    e.preventDefault()
    alert('Form submit krdu kya')
  }

  return (
    <>
    <button onClick={console.log('Hello')}>Click Here</button>

    <form onSubmit={handleSubmit}>
      {/* <input type="text" onChange={handleInputChange} /> */}
      <input type="text" onChange={handleInputChange} />
      <button>Submit</button>
    </form>

    <button onClick={handleClick}>Click Me</button>
    <button onClick={()=>{alert('i got clicked')}}>Touch Me</button>
    <p onMouseOver={handleOver} style={{border: '2px solid red'}}>I am a Para : HOVER ME</p>
    </>
  )
}

export default App
