import React, { Component } from 'react';

export class SkillSetRenderer extends Component {
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
                <ul>
                    {this.props.list.map((element) => (
                        <li>
                            <label><b>{element.title}</b></label>
                            <div>
                                <span className='skill-stat'>{element.fromDate}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
