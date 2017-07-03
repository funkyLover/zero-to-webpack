
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'

// Needed for onTouchTap
injectTapEventPlugin()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <MuiThemeProvider>
          <Component />
        </MuiThemeProvider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// hot module replacement
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRootContainer = require('./App').default
    render(NextRootContainer)
  })
}
