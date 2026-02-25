import { useEffect, useReducer } from 'react'
import { TimerWorkerManager } from '../../workers/timerWorkerManager'
import { TaskContext } from './TaskContext'
import { initialTaskState } from './initialTaskState'
import { taskReducer } from './taskReducer'
import { TaskActionTypes } from './taskAction'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)

  const worker = TimerWorkerManager.getInstance()

  worker.onmessage((e) => {
    const countDownSeconds = e.data




    if (countDownSeconds <= 0) {
        dispatch({
          type: TaskActionTypes.COMPLETE_TASK,
        })
      worker.terminate()
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds }
      })
    }
  })

  useEffect(() => {
    console.log(state)
    
    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask')
      worker.terminate()
    }

    worker.postMessage(state)
  }, [worker, state])

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
