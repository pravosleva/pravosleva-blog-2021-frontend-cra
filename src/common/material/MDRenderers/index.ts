import { BlockquoteRenderer } from './BlockquoteRenderer'
import {
  // CodeRendererSynthwave84,
  CodeRendererMaterialOceanic,
  // CodeRendererMaterialDark,
} from './CodeRenderer'
// import { HeadingRenderer } from './HeadingRenderer'
// import { ImageRenderer } from './ImageRenderer'
import { HtmlRenderer } from './HtmlRenderer'
import { LinkRenderer } from './LinkRenderer'

// export * from './BlockquoteRenderer'
// export * from './CodeRenderer'
// export * from './HeadingRenderer'
// export * from './ImageRenderer/ImageRenderer'
// export * from './LinkRenderer'

export const baseRenderers = {
  blockquote: BlockquoteRenderer,
  html: HtmlRenderer,
  code: CodeRendererMaterialOceanic,
  // heading: HeadingRenderer,
  
  // image: ImageRenderer,
  link: LinkRenderer,
}
