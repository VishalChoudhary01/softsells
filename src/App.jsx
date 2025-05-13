// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MainLayout from "./components/layout/MainLayout"
import HomePage from "./pages/HomePage"
import { store } from "./store/store"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router';
function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <MainLayout>
        <HomePage/>
      </MainLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
