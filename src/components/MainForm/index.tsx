import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import type { TaskModel } from '../../models/TaskModel'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButtom'
import { Input } from '../Input'
import { getNextCycle } from '../utils/getNextCycle'
import { getNextCycleType } from '../utils/getNextCycleType'
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction'
import { Tips } from '../Tips/inde'


export function MainForm() {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  // Ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (taskNameInput.current === null) return
    const taskName = taskNameInput.current.value.trim()
    if (!taskName) {
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
      <form onSubmit={handleCreateNewTask} className="form" action="">
        <div className="formRow">
          <Input
            id="meuInput"
            labeltext="task"
            type="text"
            placeholder="Digite algo"
            ref={taskNameInput}
            disabled={!!state.activeTask}
          />
        </div>
        <div className="formRow" >
       <Tips />
        </div>
        {state.currentCycle > 0 && (
          <div className="formRow">
            <Cycles />
          </div>
        )}
        <div className="formRow">
          {!state.activeTask && (
            <DefaultButton
              aria-label="Iniciar nova  tarefa"
              title="Iniciar nova tarefa"
              type="submit"
              icon={<PlayCircleIcon />}
              key="botao_submit"
            />
          )}
          {!!state.activeTask && (
            <DefaultButton
              aria-label="Interromper tarefa atual"
              title="Interromper tarefa atual"
              type="button"
              color="red"
              icon={<StopCircleIcon />}
              onClick={handleInterruptTask}
              key="botao_interrupt"
            />
          )}
        </div>
      </form>
    )
}
