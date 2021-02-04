import React, { Component } from 'react';
import './styles/listRenderer.css';

export class ListRenderer extends Component {
    downloadableStyle = {
        container: {
            width: '400px',
            flex: '0 1',
            padding: '0 0',
            margin: '0',
            fontSize: '10px'
          },
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div style={this.props.downloadableStyle ? this.downloadableStyle.container : null}>
                <ul className='experience-list'>
                    {this.props.list.map((element) => (
                        <li >
                            <label><b><a href={element.link}>{element.title}</a></b></label>
                            <div className='date'>
                                <span className='date-specific'>{element.fromDate}</span>
                                <div className="separator">|</div>
                                <span className='date-specific'>{element.toDate}</span>
                            </div>
                            <br></br>
                            <span>{element.place}</span>
                            <p>{element.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
