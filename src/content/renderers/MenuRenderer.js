import React, { Component } from 'react';
import './styles/menuRenderer.css';

export class MenuRenderer extends Component {
    downloadableStyle = {
        container: {
            width: '400px',
            flex: '0 1',
        },
        menu: {
            display: 'none',
        },
    };

    constructor(props) {
        super(props);
    }

    changeSelection(tab) {
        this.selectedTab = [tab];
        this.forceUpdate();
    }

    componentDidMount() {
        console.log(this.props.tabs[0]);
        this.selectedTab = [this.props.tabs[0]];
    }

    getSnapshotBeforeUpdate(prevProps) {
        console.log('ppost', prevProps);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('ppos2', prevProps);
        console.log('pstate', snapshot);
    }

    render() {
        this.selectedTab = this.selectedTab ? this.selectedTab : [this.props.tabs[0]];
        return (
            <div
                className='menu-container'
                style={this.props.downloadableStyle ? this.downloadableStyle.container : null}
            >
                <ul className='menu'>
                    {this.props.tabs.map((tab) => {
                        return (
                            <li
                                style={
                                    this.props.downloadableStyle
                                        ? this.downloadableStyle.menu
                                        : null
                                }
                                className={this.selectedTab.indexOf(tab) !== -1 ? 'active' : ''}
                                onClick={() => this.changeSelection(tab)}
                                key={tab}
                            >
                                {tab}
                            </li>
                        );
                    })}
                </ul>
                <div>
                    {this.props.children[0].filter(
                        (child) =>
                            this.selectedTab.indexOf(child.props.value) !== -1 ||
                            !!this.props.downloadableStyle !== false
                    )}
                </div>
            </div>
        );
    }
}
