import { useTaskContext } from '../../contests/TaskContext'
import styles from './styles.module.css'

export function CountDown() {
  const { state } = useTaskContext();

  return <div className={styles.container}>{state.formatedSecondsReimining}</div>
}
