import { lazy, Suspense } from 'react'
import { TPhoto } from '~/common/material/ProjectInModal/components'
import { useStyles } from './styles'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import slugify from 'slugify'
import { baseRenderers } from '~/common/material/MDRenderers'
import gfm from 'remark-gfm'
import { theme } from '~/common/material/theme'

const ReactMarkdown = lazy(() =>
  import(/* webpackChunkName: "ReactMarkdown" */ 'react-markdown')
)

type TProps = {
  photos: TPhoto[]
  title: string
  description: string
}

export const Gallery = ({ photos, title, description }: TProps) => {
  const classes = useStyles()

  return (
    <div>
      <h2>{title}</h2>
      {!!description ? (
        <Suspense fallback={<div style={{ marginBottom: '16px' }}>Loading...</div>}>
          <ReactMarkdown
            // @ts-ignore
            plugins={[gfm, { singleTilde: false }]}
            components={baseRenderers}
            children={description}
          />
        </Suspense>
      ) : null}
      {
        !!photos && photos.length > 0 && (
          <div className={classes.galleryWrapper}>
            <SimpleReactLightbox>
              <div className={classes.srLWrapperLayout}>
                <SRLWrapper
                  options={{
                    settings: {
                      // overlayColor: "rgb(25, 136, 124)",
                      lightboxTransitionSpeed: 0.03,
                      // disableKeyboardControls: false,
                      slideTransitionSpeed: 0.03,
                      // slideAnimationType: '',
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
                      showAutoplayButton: true,
                      backgroundColor: theme.palette.primary.main,
                      iconColor: 'rgba(255, 255, 255, 1)',
                      iconPadding: '10px',
                      size: '35px',
                    },
                    thumbnails: {
                      showThumbnails: true,
                      thumbnailsAlignment: 'center',
                      thumbnailsContainerBackgroundColor: 'transparent',
                      thumbnailsContainerPadding: '0',
                      thumbnailsGap: '0 1px',
                      thumbnailsIconColor: '#ffffff',
                      thumbnailsOpacity: 0.5,
                      thumbnailsPosition: 'bottom',
                      thumbnailsSize: ['100px', '80px']
                    },
                    progressBar:{
                      backgroundColor: '#FFF',
                      fillColor: theme.palette.primary.main,
                      height: '2px',
                      showProgressBar: true,
                    },
                    // translations: {}, // PRO ONLY
                    // icons: {} // PRO ONLY
                  }}
                >
                  {
                    photos.map(({ formats, url, caption }: TPhoto) => {
                      const {
                        // thumbnail,
                        small,
                      } = formats
                      const src = url
                      const thumbnailSrc = !!small ? small.url : url
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