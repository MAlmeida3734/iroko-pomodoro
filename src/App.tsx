import { MesssagesContainer } from './components/MessagesContainer'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { Home } from './pages/Home'
import './styles/global.css'
import './styles/theme.css'

export function App() {
  return (
    <TaskContextProvider>
      <MesssagesContainer>
        <Home />
      </MesssagesContainer>
    </TaskContextProvider>
  )
}
