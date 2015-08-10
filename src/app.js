import React from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers} from 'redux';
import Feedback from './components/feedbacks/feedback'
import feedbacks from './stores/feedbacks/feedbacksStore'

class App extends React.Component {
  render() {
    return (
      <div>
        <Feedback/>
      </div>
    )
  }
}

const store = createStore(combineReducers({feedbacks}))

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('react')
);
