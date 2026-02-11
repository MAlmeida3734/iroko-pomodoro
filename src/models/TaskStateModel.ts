import type { TaskModel } from './TaskModel'

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[] // histórico de tarefas, MainForm
  secondsRemaining: number // CountDown, historico de tarefas, MainForm,button
  formatedSecondsReimining: string // Título do timer, CountDown
  activeTask: TaskModel | null // CountDown, historico de tarefas, MainForm,button
  currentCycle: number // Home
  config: {
    workTime: number // MainForm
    shortBreakTime: number // MainForm
    longBreakTime: number // MainForm
  }
}
