type InputProps = {
  id: string;
  labeltext: string;
} & React.ComponentProps<'input'>;


export function Input({ id, type, labeltext}: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labeltext}</label>
      <input id={id} type={type} />
    </>
  )
}
