export const LinkRenderer = (props: any) => {
  // console.log(props)

  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  )
  }