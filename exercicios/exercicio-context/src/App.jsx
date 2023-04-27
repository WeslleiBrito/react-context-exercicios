import { useGetAllUseres } from './hooks/getAllUseres'

import './App.css'

function App() {
  const { users, loading, error } = useGetAllUseres()

  console.log(users)

  return (
    <>

    </>
  )
}

export default App
