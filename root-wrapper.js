import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code } from './src/components/pageElements/Code';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './src/theme/global-style';

const components = {
  h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
  'p.inlineCode': props => (
    <code {...props} style={{ backgroundColor: 'lightgrey' }}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  }
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);
