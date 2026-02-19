import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispach] = useReducer(taskReducer, initialTaskState);



  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispach }}>
      {children}
    </TaskContext.Provider>
  )
}


