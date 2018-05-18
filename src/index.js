import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import PlaceholderContainer from './containers/Placeholder'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <PlaceholderContainer />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
