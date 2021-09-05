import { useEffect } from 'react'
import { TPhoto } from '~/common/material/ProjectInModal/components'
import { useStyles } from './styles'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
// import clsx from 'clsx'
import slugify from 'slugify'
import { baseRenderers } from '~/common/material/MDRenderers'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Prism from 'prismjs'

type TProps = {
  photos: TPhoto[]
  title: string
  description: string
}

export const Gallery = ({ photos, title, description }: TProps) => {
  const classes = useStyles()
  useEffect(() => {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(() => {
      Prism.highlightAll()
    }, 0)
  }, [])

  return (
    <div>
      {/* <pre>{JSON.stringify(photos, null, 2)}</pre> */}
      {/* photos.map(({ id, url }: TPhoto) => (
        <img key={id} alt='img' src={url} />
      )) */}
      <h2>{title}</h2>
      {/* @ts-ignore */}
      <ReactMarkdown plugins={[gfm, { singleTilde: false }]} renderers={baseRenderers} children={description} />
      {
        !!photos && photos.length > 0 && (
          <div className={classes.galleryWrapper}>
            <SimpleReactLightbox>
              <div className={classes.srLWrapperLayout}>
                <SRLWrapper
                  options={{
                    settings: {
                      // overlayColor: "rgb(25, 136, 124)",
                    },
                    caption: {
                      captionAlignment: 'start',
                      captionColor: '#FFFFFF',
                      captionContainerPadding: '20px 0 30px 0',
                      captionFontFamily: 'inherit',
                      captionFontSize: 'inherit',
                      captionFontStyle: 'inherit',
                      captionFontWeight: 'inherit',
                      captionTextTransform: 'inherit',
                      showCaption: true
                    },
                    buttons: {
                      showDownloadButton: false,
                      showAutoplayButton: false,
                      // backgroundColor: 'rgba(30,30,36,0.8)',
                      // backgroundColor: 'rgb(25, 136, 124)',
                      // backgroundColor: '#22577a',
                      backgroundColor: '#f44336',
                      iconColor: 'rgba(255, 255, 255, 1)',
                      iconPadding: '10px',
                    },
                    thumbnails: {
                      showThumbnails: true,
                      thumbnailsAlignment: 'center',
                      thumbnailsContainerBackgroundColor: 'transparent',
                      thumbnailsContainerPadding: '0',
                      thumbnailsGap: '0 1px',
                      thumbnailsIconColor: '#ffffff',
                      thumbnailsOpacity: 0.4,
                      thumbnailsPosition: 'bottom',
                      thumbnailsSize: ['100px', '80px']
                    },
                    progressBar:{
                      backgroundColor: '#f2f2f2',
                      fillColor: '#000000',
                      height: '3px',
                      showProgressBar: true
                    },
                    // translations: {}, // PRO ONLY
                    // icons: {} // PRO ONLY
                  }}
                >
                  {
                    photos.map(({ formats, url, caption }: TPhoto) => {
                      const { thumbnail } = formats
                      const src = url
                      const thumbnailSrc = !!thumbnail ? thumbnail.url : url
                      return (
                        <div className='grid-item' key={`${src}_${slugify(caption || 'no-caption')}`}>
                          <a href={src}>
                            <img src={thumbnailSrc} alt={caption || 'No caption'} />
                          </a>
                        </div>
                      )
                    })
                  }
                </SRLWrapper>
              </div>
            </SimpleReactLightbox>
          </div>
        )
      }
    </div>
  )
}