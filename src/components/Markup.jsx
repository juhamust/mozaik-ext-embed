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
    const { title } = this.props;
    let output = (<div className="widget-markup__body" dangerouslySetInnerHTML={{
      __html: this.props.content
    }}></div>);

    if (title) {
      output = (
        <div className="widget-markup__container">
          <div className="widget__header">
            {title}
          </div>
          {output}
        </div>
      );
    }

    return output;
  }
}

Markup.propTypes = {
  content: PropTypes.string.isRequired
};

export default Markup;
