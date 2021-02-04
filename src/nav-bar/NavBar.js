import React, { Component } from 'react';
import './NavBar.css';

export class NavBar extends Component {
    downloadableStyle = {
      nav: {
        display: 'none',
      },
      separationLine: {
        border: '3px solid black',
        backgroundColor: 'black',
        marginRight: '25px'
      },
      menu: {
        display: 'none'
      }
    };
    selectedTab = 0;

    constructor(props) {
        super(props);
        this.state = {
          navStyle: {
            class: 'show'
          }
        }
    }

    handleTabClick = (key, index) => {
        this.props.selectTab(key);
        this.selectedTab = index;
    };

    onMenuClick = ({ navStyle }) => {
      const cssClass = navStyle.class === 'show' ? 'hide' : 'show';

      this.setState({
        navStyle: {
          class: cssClass
        }
      })
    };

    render() {
        return (
            <div>
                <div className="menu-icon-container"   onClick={() => this.onMenuClick(this.state)}></div><div className="menu-icon" style={this.props.downloadableStyle ? this.downloadableStyle.menu : null }></div>
                <div className={ this.state.navStyle.class } style={this.props.downloadableStyle ? this.downloadableStyle.nav : null }>
                    <ul id='profile-nav'>
                        {this.props.tabs.map((tab, i) => (
                            <li
                                className={this.selectedTab === i ? 'selected' : ''}
                                onClick={() => this.handleTabClick(tab.key, i)}
                                key={i}
                            >
                                {tab.tabName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='separtionLine' style={this.props.downloadableStyle ? this.downloadableStyle.separationLine : null}><span class="traveler"></span></div>
            </div>
        );
        
    }
}
