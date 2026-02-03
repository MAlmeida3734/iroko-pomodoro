import { Container } from './components/Container'
import { CountDown } from './components/Countdown'
import { Input } from './components/Input'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css'
import './styles/theme.css'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input  id="meuInput" labeltext="Task" type= 'text'/>    
          </div>

          <div className="formRow">
            <p>Lorem, ipsum dolor sit.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p> 0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <p>Enviar</p>
          </div>
        </form>
      </Container>
    </>
  )
}
