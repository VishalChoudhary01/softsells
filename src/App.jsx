import MainLayout from "./components/layout/MainLayout"
import HomePage from "./pages/HomePage"
import { store } from "./store/store"
import { Provider } from "react-redux"

function App() {

  return (
    <Provider store={store}>
      <MainLayout>
        <HomePage/>
      </MainLayout>
    </Provider>
  )
}

export default App
