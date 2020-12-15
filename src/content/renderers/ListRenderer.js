import React, { Component } from 'react';
import './styles/listRenderer.css';

export class ListRenderer extends Component {
    downloadableStyle = {
        width: '400px',
        flex: '0 1',
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <ul className='experience-list'>
                    {this.props.list.map((element) => (
                        <li>
                            <label><b>{element.title}</b></label>
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
