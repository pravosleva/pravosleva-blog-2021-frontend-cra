import { MarkdownSection } from './components'

type TPhoto = {
  provider: string // "local"
  related: string[]
  createdAt: string // "2021-09-04T20:26:59.802Z",
  updatedAt: string // "2021-09-04T20:49:31.809Z",
  __v: number // 0,
  id: string
}
type TGallery = {
  id: string
  photos: TPhoto[]
}
type TSection = {
  id: string
  __component: "sections.rich-text" | any
  content?: string
  Gallery?: TGallery[]
}
type TProps = {
  sections: TSection[]
}

export const Content = ({ sections }: TProps) => {
  return (
    <div>{sections.map(({ __component, content, Gallery }) => {
      switch(__component) {
        case "sections.rich-text":
          return (
            <MarkdownSection
              content={content}
              Gallery={Gallery}
            />
          )
        default: return null
      }
    })}</div>
  )
}