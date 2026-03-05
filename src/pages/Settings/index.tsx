import { SaveIcon } from 'lucide-react'
import { useRef } from 'react'
import { showAlert } from '../../adapters/showAlert'
import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { Heading } from '../../components/Heading'
import { Input } from '../../components/Input'
import { MainTemplate } from '../../components/Template/MainTemplate'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

export function Settings() {
  const { state } = useTaskContext()
  const workTimeInput = useRef<HTMLInputElement>(null)
  const shortBreakTimeInput = useRef<HTMLInputElement>(null)
  const longBreakTimeInput = useRef<HTMLInputElement>(null)

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    showAlert.dismiss()

    const formErrors = []

    const workTime = Number(workTimeInput.current?.value)
    const shortBreakTime = Number(shortBreakTimeInput.current?.value)
    const longBreakTime = Number(longBreakTimeInput.current?.value)

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para todos os campos')
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para o foco')
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para o descanso curto')
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para o descanso longo')
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showAlert.error(error)
      })
      return
    }
    console.log('Salvar')
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Modifique as configurações para tempo de foco, descanso curto e descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <Input
              id="workTime"
              labeltext="Foco"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <Input
              id="shortBreakTime"
              labeltext="Descanso Curto"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <Input
              id="longBreakTime"
              labeltext="Descanso Longo"
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar 
          configurações"
              title="Salvar configurções"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  )
}
