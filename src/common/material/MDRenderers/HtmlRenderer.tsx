import {
  lazy,
  Suspense,
} from 'react'
import {
  YoutubePlayer,
  // YoutubeGrid, YoutubeInModal,
} from './YoutubeRenderer'
// import JsxParser from 'react-jsx-parser'
// import Gist from 'react-gist'
// import { Alert } from './Alert'
// import { ImageInNewTab } from './ImageRenderer'

const JsxParser = lazy(() =>
  import(/* webpackChunkName: "JsxParser" */ 'react-jsx-parser')
)

const componentTransforms = {
  // Alert: (props: any) => <Alert text={props.value} {...props} />,
  React: (props: any) => {
    // console.log(props)
    return (
      <div>{props.children}</div>
    )
  },
  // YoutubeGrid,
  // YoutubeInModal,
  YoutubePlayer,
  // Gist: ({ gistId }: { gistId: string }) => <Gist id={gistId} />,
  // ImageInNewTab: (props: any) => <ImageInNewTab {...props} />,
}

export const HtmlRenderer = (props: any) => {
  // console.log(props)
  return (
    <Suspense fallback={<div style={{ marginBottom: '16px' }}>Loading jsx parser...</div>}>
      {/* @ts-ignore */}
      <JsxParser jsx={props.value} components={componentTransforms} />
    </Suspense>
  )
}