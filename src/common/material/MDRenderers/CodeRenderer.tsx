import { PrismAsyncLight as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import {
  // synthwave84, materialDark,
  materialOceanic,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
// import Alert from '@material-ui/lab/Alert'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '~/common/material/ErrorFallback'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('js', js)

// export const CodeRendererSynthwave84 = ({ language, value }: any) => {
//   return <SyntaxHighlighter showLineNumbers={false} style={synthwave84} language={language} children={value} />
// }

// export const CodeRendererMaterialDark = ({ language, value }: any) => {
//   return <SyntaxHighlighter showLineNumbers={true} style={materialDark} language={language} children={value} />
// }

export const CodeRendererMaterialOceanic = ({ className, children, ...rest }: SyntaxHighlighterProps) => {
  // NOTE: Derty hack: Last whitespace should be removed from code
  const newChildren = children
  const defaultLang = 'js'

  if (!className) return <>{children.map((c, i) => <code key={i}>{c}</code>)}</>

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <SyntaxHighlighter
        // wrapLongLines='pre-wrap'
        style={materialOceanic}
        // children={children}
        language={className.split('-')[1] || defaultLang}
        // {...rest}
        // className={className}
      >
        {newChildren.map((s: string) => s.slice(0, -1))}
      </SyntaxHighlighter>
    </ErrorBoundary>
  )
}