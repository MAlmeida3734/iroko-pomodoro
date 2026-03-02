import { useEffect, useReducer } from 'react'
import { TimerWorkerManager } from '../../workers/timerWorkerManager'
import { TaskContext } from './TaskContext'
import { initialTaskState } from './initialTaskState'
import { taskReducer } from './taskReducer'
import { TaskActionTypes } from './taskAction'
import { loadBeep } from '../../utils/loadBeep'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance()

  worker.onmessage((e) => {
    const countDownSeconds = e.data




    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null
      }
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


    if (!state.activeTask) {
      worker.terminate()
    }

    worker.postMessage(state)
  }, [worker, state])

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null
    }

  }, [state.activeTask]);

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
