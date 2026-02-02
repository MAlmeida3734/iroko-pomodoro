import { Container } from './components/Container.tsx'
import { Heading } from './components/Heading.tsx'
import './styles/global.css'
import './styles/theme.css'

export function App() {
  return (
    <>
      <Container>
        <Heading> Iroko Pomodoro </Heading>
      </Container>

      <Container>
        <Heading> LOGO </Heading>
      </Container>

      <Container>
        <Heading> MENU </Heading>
      </Container>
    </>
  )
}
