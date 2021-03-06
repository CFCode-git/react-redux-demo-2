import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  add1() {
    this.props.onAdd1()
    // this.props.store.dispatch({ type: 'add', payload: 1 })
  }
  render() {
    return (
      <div>
        你点击了<span id="value">{this.props.n}</span>次
            <div>
          <button id="add1" onClick={() => this.props.add1()}>+1</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    n: state.n
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add1: () => dispatch({ type: 'add', payload: 1 })
  }
}

// bindActionsCreators({type:'add'},dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(App);
