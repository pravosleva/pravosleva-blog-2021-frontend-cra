import { baseRenderers } from '~/common/material/MDRenderers'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { TGallery } from '~/pages/projects/components/ProjectInModal/components'
import { Gallery as G } from './components'

type TProps = {
  content: string
  Gallery?: TGallery[]
}

export const MarkdownSection = ({ content, Gallery }: TProps) => {
  return (
    <>
      {/* @ts-ignore */}
      <ReactMarkdown plugins={[gfm, { singleTilde: false }]} renderers={baseRenderers} children={content} />
      {/* <pre>{JSON.stringify(Gallery, null, 2)}</pre> */}
      {!!Gallery && Gallery.map(({ id, photos, title, description }) => <G key={id} photos={photos} title={title} description={description} />)}
    </>
  )
}