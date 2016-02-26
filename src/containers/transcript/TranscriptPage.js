import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';



class Word extends React.Component {


  render() {
    console.log('rendering word');
    return
  }
}

Word.propTypes = {
  word: React.PropTypes.shape({
    word: React.PropTypes.string.isRequired
  }).isRequired
};

class Line extends React.Component {
  render() {
    return <div>{this.props.line.map((word) => <Word word={word}/>)}</div>
  }
}


class TranscriptPage extends React.Component {

  render() {

    const lines = this.props.transcript.map((line, idx) => <Line line={line} key={idx}/>);


    return (
      <div className="boo">
        <h1> C-SPAN transcript </h1>
        <div>{lines}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {transcript: state.transcript};

}

export default connect(mapStateToProps)(TranscriptPage);
