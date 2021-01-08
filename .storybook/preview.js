
import React from 'react';
import GlobalStyle from '../src/Core/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => 
<React.Fragment>
  <GlobalStyle/>
  <Story/>
</React.Fragment>];