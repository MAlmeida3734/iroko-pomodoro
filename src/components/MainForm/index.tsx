import { PlayCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButtom'
import { Input } from '../Input'
import { useTaskContext } from '../../contests/TaskContext';

export function MainForm() {
const {setState} = useTaskContext();

function handleSubmit() {
setState(prevState => { return {...prevState, formatedSecondsReimining:'21:00' }}) 
}

  return (
    <form className="form" action="">
      <button onClick={handleSubmit} type="button">Clicar</button>
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
