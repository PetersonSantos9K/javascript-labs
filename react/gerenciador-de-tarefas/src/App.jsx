import Tasks from "./pages/Tasks"
import Title from "./components/Title"

function App() {



  
  return (
    <div className="flex flex-col  items-center mt-3">
      <Title>Gerenciador de Tarefas</Title>
      <div className="flex mt-3 flex-col gap-3 ">
        <Tasks/>
      </div>
      
    </div>
    
  )
}

export default App
