import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando timer for concluída
  interruptDate:  number | null; // quando timer for interrompida
  type: keyof TaskStateModel["config"]; // workTime, shortBreakTime ou longBreakTime
};


