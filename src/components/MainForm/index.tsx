import { PlayCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButtom'
import { Input } from '../Input'

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <Input id="meuInput" labeltext="task" type="text" placeholder="Digite algo" />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 minutos</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
}
