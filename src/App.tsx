import { PlayCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { CountDown } from './components/Countdown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButtom'
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
            <Input id="meuInput" labeltext="Task" type="text" placeholder="Digite algo" />
          </div>

          <div className="formRow">
            <p>Lorem, ipsum dolor sit.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
             </div>
        </form>
      </Container>
    </>
  )
}
