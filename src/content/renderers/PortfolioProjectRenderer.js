import React, { Component } from 'react';
import './styles/project.css';

export class PortfolioProjectRenderer extends Component {
    downloadableStyle = {
        container: {
          width: '496px',
          flex: '0 1',
          fontSize: '10px'
        }
      }

    constructor(props) {
        super(props);
        this.state = {
            showDescription: [false, false, false],
        };
    }

    componentDidMount() {}

    showDescription = (i) => {
        let newDescription = this.state.showDescription;
        newDescription[i] = true;
        this.setState({
            showDescription: newDescription,
        });
    };

    removeDescription = (i) => {
        let newDescription = this.state.showDescription;
        newDescription[i] = false;
        this.setState({
            showDescription: newDescription,
        });
    };

    render() {
        return (
            <div className='container' style={this.props.downloadableStyle ? this.downloadableStyle.container : null}>
                {this.props.projects.map((element, i) => {
                    return (
                        <div
                            key={i}
                            className='projectContainer'
                            onMouseEnter={() => {
                                this.showDescription(i);
                                this.forceUpdate();
                            }}
                            onMouseLeave={() => {
                                this.removeDescription(i);
                                this.forceUpdate();
                            }}
                        >
                            <img className="githubLogo" src="/github.png"></img>
                            <p
                                className={
                                    this.state.showDescription[i] === false
                                        ? 'description hidden'
                                        : 'description'
                                }
                            >
                                {element.description}
                            </p>
                            <span className={ this.state.showDescription[i] === true ? 'hidden' : '' }>{element.name}</span>
                            <div className='projectFooter'>
                                <div className="projectStars">
                                    STARS: {element.stars}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
