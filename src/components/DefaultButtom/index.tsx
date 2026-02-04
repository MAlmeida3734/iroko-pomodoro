import styles from './styles.module.css'


type DefaultButtonProps = {
 icon: React.ReactNode;
} & React.ComponentProps<'button'>

export function DefaultButton({ icon, ...props }: DefaultButtonProps) {
  return (
    <>

      <button className={styles.defaultbutton} {...props}>
{icon}
        </button>
    </>
  )
}
