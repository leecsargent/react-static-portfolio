import React from 'react';
import { connect } from 'react-redux';
import { increment, reset } from '../connectors/redux/actions/counter';

const Counter = ({ count, increment, reset}) => {
  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

const mapStateToProps = ({ counter: { count } }) => ({ count });

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset()),
});

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter);

const About = () => (
  <div>
    <h2>Here is a redux counter:</h2>
    <CounterConnected />
  </div>
)

export { CounterConnected }
export default About
