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
        this.selectedTab = [this.props.tabs[0]];
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
                    {
                    this.props.children[0][1].filter(
                        (child) =>
                            this.selectedTab.indexOf(child[1].props.value) !== -1 ||
                            !!this.props.downloadableStyle !== false
                    )}
                </div>
            </div>
        );
    }
}
