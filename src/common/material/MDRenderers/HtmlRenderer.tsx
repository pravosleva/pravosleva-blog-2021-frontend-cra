import {
  YoutubePlayer,
  // YoutubeGrid, YoutubeInModal,
} from './YoutubeRenderer'
import JsxParser from 'react-jsx-parser'
// import Gist from 'react-gist'
// import { Alert } from './Alert'
// import { ImageInNewTab } from './ImageRenderer'

const componentTransforms = {
  // Alert: (props: any) => <Alert text={props.value} {...props} />,
  React: (props: any) => <div style={{ border: '1px solid red' }}>{props.children}</div>,
  // YoutubeGrid,
  // YoutubeInModal,
  YoutubePlayer,
  // Gist: ({ gistId }: { gistId: string }) => <Gist id={gistId} />,
  // ImageInNewTab: (props: any) => <ImageInNewTab {...props} />,
}

// @ts-ignore
export const HtmlRenderer = (props: any) => <div style={{ border: '1px solid red' }}><JsxParser jsx={props.value} components={componentTransforms} /></div>