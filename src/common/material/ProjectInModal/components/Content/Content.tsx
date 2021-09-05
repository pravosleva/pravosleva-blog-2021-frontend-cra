import { MarkdownSection } from './components'

type TFormat = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path: any
  url: string
}
type TFormats = {
  thumbnail: TFormat
  small: TFormat
}
export type TPhoto = {
  provider: string // "local"
  related: string[]
  createdAt: string // "2021-09-04T20:26:59.802Z",
  updatedAt: string // "2021-09-04T20:49:31.809Z",
  __v: number // 0,
  id: string
  formats: TFormats
  alternativeText: string
  caption: string

  name: string
  hash: string
  ext: string
  mime: string
  size: number // 12.08,
  width: number // 640,
  height: number // 640,
  url: string
}
export type TGallery = {
  id: string
  photos: TPhoto[]
  title: string
  description: string
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