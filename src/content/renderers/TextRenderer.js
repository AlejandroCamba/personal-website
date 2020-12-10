import React, { Component } from 'react';

export class TextRenderer extends Component {
  downloadableStyle = {
    container: {
      width: '450px',
      flex: '0 1',
      padding: '0 0',
      margin: '0',
      border: '1px solid'
    },
    parragraph: {
      border: '1px solid yellow',
      padding: '5px 20px'
    }
  }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={ this.props.downloadableStyle ? this.downloadableStyle.container : null }>
              {
                <p style={this.props.downloadableStyle ? this.downloadableStyle.parragraph : null}>{ this.props.parragraph }</p>
              }
            </div>
        );
    }
}
