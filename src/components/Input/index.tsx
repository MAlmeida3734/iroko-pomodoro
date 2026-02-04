import  styles from './styles.module.css'


type InputProps = {
  id: string
  labeltext: string
} & React.ComponentProps<'input'>

export function Input({ id, type, labeltext, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labeltext}</label>

      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  )
}
