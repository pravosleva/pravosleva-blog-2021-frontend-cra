import { useRef } from 'react'
import { baseRenderers } from '~/common/material/MDRenderers'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { TGallery } from '~/common/material/ProjectInModal/components'
import { Gallery as G } from './components'
import { useEffect } from 'react'

type TProps = {
  content: string
  Gallery?: TGallery[]
}

export const MarkdownSection = ({ content, Gallery }: TProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = contentRef.current
    // NOTE: Open link in new tab
    const listener = function(e) {
      const { target: { tagName, href } } = e 
      switch (tagName) {
        case 'A':
          e.preventDefault()
          window.open(href, "_blank");
          break;
        default: break;
      }
    }

    // Subscribe to listener:
    current.addEventListener('click', listener)

    return () => {
      // Unsubscribe from listener:
      current.removeEventListener('click', listener)
    }
  }, [])

  if (!content) return null
  // console.log(content)
  return (
    <>
      <div ref={contentRef}>
        <ReactMarkdown
          // @ts-ignore
          plugins={[gfm, { singleTilde: false }]}
          components={baseRenderers}
          children={content}
        />
        {/* <pre>{JSON.stringify(Gallery, null, 2)}</pre> */}
        {!!Gallery && Gallery.map(({ id, photos, title, description }) => <G key={id} photos={photos} title={title} description={description} />)}
      </div>
    </>
  )
}