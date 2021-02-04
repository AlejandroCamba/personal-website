import React, { Component } from 'react';
import './styles/skillSet.css';

export class SkillSetRenderer extends Component {
    downloadableStyle = {
        container: {
            width: '400px',
            flex: '0 1',
            fontSize: '8px',
            border: '1px solid blue'
        }
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div  style={this.props.downloadableStyle ? this.downloadableStyle.container : { width: '400px' }}>
                <ul className="skillList">
                    {this.props.skillList.map((element) => (
                        <li className="skill">
                            <span>{element.title}</span>
                            <div className='skill-container'>
                                <div className='skills skill-bar' style={{ width: element.percentage + '%'}}>{element.percentage}%</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
