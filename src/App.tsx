import { BrowserRouter, Route, Routes } from 'react-router'
import { MesssagesContainer } from './components/MessagesContainer'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { Home } from './pages/Home'
import './styles/global.css'
import './styles/theme.css'
import { Notfound } from './components/Notfound'
import { AboutPomodoro } from './components/AboutPomodoro'

export function App() {
  return (
    <TaskContextProvider>
      <MesssagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-pomodoro" element={<AboutPomodoro />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </MesssagesContainer>
    </TaskContextProvider>
  )
}
