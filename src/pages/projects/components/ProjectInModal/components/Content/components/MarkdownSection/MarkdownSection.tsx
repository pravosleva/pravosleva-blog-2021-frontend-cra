type TProps = {
  content: string
  Gallery?: any
}

export const MarkdownSection = ({ content, Gallery }: TProps) => {
  return (
    <>
      <div>{content}</div>
      {!!Gallery && (
        <pre>{JSON.stringify(Gallery, null, 2)}</pre>
      )}
    </>
  )
}