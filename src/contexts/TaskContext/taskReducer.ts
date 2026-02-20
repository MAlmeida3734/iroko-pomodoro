import { formatSecondToMinute } from "../../components/utils/formatSecondToMinute";
import { getNextCycle } from "../../components/utils/getNextCycle";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionTypes, type TaskActionModel } from "./taskAction";

export function taskReducer(
    state: TaskStateModel,
    action: TaskActionModel,
): TaskStateModel {
    switch (action.type) {
        case TaskActionTypes.START_TASK: {
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60
            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formatedSecondsReimining: formatSecondToMinute(secondsRemaining),
                tasks: [...state.tasks, newTask],
            };
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsReimining: '00:00',
                tasks: state.tasks.map((task) => {
                    if (state.activeTask && state.activeTask.id === task.id) {
                        return { ...task, interruptDate: Date.now() }
                    }
                    return task
                }),
            };
        }
        case TaskActionTypes.RESET_STATE: {

            return state;
        }
    }


    // Sempre deve retornar o estado
    return state
};
