import React, { Component, PropTypes } from 'react';
import Mozaik from 'mozaik/browser';


class Markup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getMarkup() {
    return this.props.content;
  }

  render() {
    return (<div dangerouslySetInnerHTML={{
      __html: this._getMarkup.bind(this)()
    }}></div>);
  }
}

Markup.propTypes = {
  content: PropTypes.string.isRequired
};

export default Markup;
