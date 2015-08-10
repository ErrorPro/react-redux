import React from 'react';
import { connect } from 'react-redux';
import {incrementAsync, increment} from '../../stores/feedbacks/feedbacksAction';

@connect(state => ({
    counter: state.feedbacks
}))
export default class Feedback {
  render() {
    const { counter, dispatch } = this.props;

    return (
      <div>
      {counter}
     <button onClick = {() => dispatch(increment())} />
      </div>
    )
  }
}
