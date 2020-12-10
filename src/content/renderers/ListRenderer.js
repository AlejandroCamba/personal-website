import React, { Component } from 'react';

export class ListRenderer extends Component {
  downloadableStyle = {
    width: '400px',
    flex: '0 1'
};

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div>
              
                <ul>
                  {
                  this.props.list.map((element) => 
                    <li>
                      <label>{element.title}</label><span>{element.fromDate}</span><span>{element.toDate}</span>
                      <br></br>
                      <span>{element.place}</span>
                      <p>{element.body}</p>
                    </li>
                  )
                  }
                </ul>
              
            </div>
        );
    }
}
