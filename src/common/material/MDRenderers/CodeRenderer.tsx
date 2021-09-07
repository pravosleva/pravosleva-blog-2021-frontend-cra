import { PrismAsyncLight as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import {
  // synthwave84, materialDark,
  materialOceanic,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('javascript', js)

// export const CodeRendererSynthwave84 = ({ language, value }: any) => {
//   return <SyntaxHighlighter showLineNumbers={false} style={synthwave84} language={language} children={value} />
// }

// export const CodeRendererMaterialDark = ({ language, value }: any) => {
//   return <SyntaxHighlighter showLineNumbers={true} style={materialDark} language={language} children={value} />
// }

export const CodeRendererMaterialOceanic = ({ className, children, ...rest }: SyntaxHighlighterProps) => {
  
  const language = className.split('-')[1]

  // NOTE: Derty hack: Last whitespace should be removed from code
  const newChildren = children

  return (
    <SyntaxHighlighter
      // wrapLongLines='pre-wrap'
      style={materialOceanic}
      // children={children}
      language={language}
      // {...rest}
      // className={className}
    >
      {newChildren.map((s: string) => s.slice(0, -1))}
    </SyntaxHighlighter>
  )
}