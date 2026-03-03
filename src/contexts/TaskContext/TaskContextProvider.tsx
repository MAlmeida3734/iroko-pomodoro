import { useEffect, useReducer, useRef } from 'react'
import type { TaskStateModel } from '../../models/TaskStateModel'
import { loadBeep } from '../../utils/loadBeep'
import { TimerWorkerManager } from '../../workers/timerWorkerManager'
import { TaskContext } from './TaskContext'
import { initialTaskState } from './initialTaskState'
import { TaskActionTypes } from './taskAction'
import { taskReducer } from './taskReducer'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state')

    if (storageState === null) return initialTaskState

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formatedSecondsReimining: '00:00',
    }
  })

  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)

  const worker = TimerWorkerManager.getInstance()

  worker.onmessage((e) => {
    const countDownSeconds = e.data

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current()
        playBeepRef.current = null
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      })
      worker.terminate()
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      })
    }
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))

    if (!state.activeTask) {
      worker.terminate()
    }

    document.title = `${state.formatedSecondsReimining} - Iroko Pomodoro`

    worker.postMessage(state)
  }, [worker, state])

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep()
    } else {
      playBeepRef.current = null
    }
  }, [state.activeTask])

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>
}

// const worker = TimerWorkerManager.getInstance();

//     worker.postMessage('Favor')
//     worker.postMessage('Fala_Oi')
//     worker.postMessage('Fechar')

//     worker.onmessage(event => {
//       console.log('PRINCIPAL recebeu:', event.data);
//       worker.terminate();
//     });
