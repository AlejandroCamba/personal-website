import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { Header } from './header/Header';
import { DownloadAsCvButton } from './components/download-as-cv/DownloadAsCv';
import { Observable, Subject } from 'rxjs';
import { Content } from './content/Content';
import { NavBar } from './nav-bar/NavBar';

class App extends React.Component {
    downloadableStyle = {
      height: '1272px',
      width: '973px',
    };

    navBarOptions = [];

    constructor(props, _styleChanged$) {
        super(props);

        this.state = {
            style: null,
            selectedPage: [],
            content: {},
            profileContentFile: 'cv-profile/content.json'
        };

        this._styleChanged$ = new Subject(null);
    }

    fetchProfileJSON = () => {
        fetch(this.state.profileContentFile)
        .then((r) => r.json())
        .then((data) => {
            this.navBarOptions = Object.keys(data.sections).map((section) => ({
                key: section,
                tabName: data.sections[section].tabName,
            }));

            this.setState({
                content: data,
                selectedPage: [data.sections[Object.keys(data.sections)[0]]],
            });
            this.forceUpdate();
        });
    }

    componentDidMount() {
        this.fetchProfileJSON();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.style) {
            this._styleChanged$.next(true);
            this.setState({
                style: null,
                selectedPage: [
                    this.state.content.sections[Object.keys(this.state.content.sections)[0]],
                ],
            });
        }
    }

    loadDownloadableStyle = (shouldApplyStyle) => {
      if (shouldApplyStyle === this.state.style) {
          this._styleChanged$.next(null);
      } else {
          const pages = [];

          Object.keys(this.state.content.sections).forEach((section, i) => {
            const selectedSection = this.state.content.sections[section];

              if (selectedSection.allowInCv)
                pages.push(selectedSection);
          });

          this.setState({
              style: shouldApplyStyle,
              selectedPage: pages,
          });
      }

      return this._styleChanged$.asObservable();
  };

  changeSelectedTab = (tab) => {
      this.setState({
          selectedPage: [this.state.content.sections[tab]],
      });
  };

  changeProfileFile = (languagePrefix) => {
    
    this.setState({
        selectedPage: [],
        content: {},
        profileContentFile: `cv-profile/${languagePrefix.toLowerCase()}.content.json`
    }, () => {
        this.fetchProfileJSON();
    });
  }

    render() {
        return (
            <div
                style={this.state.style ? this.downloadableStyle : null}
                className={'App'}
                id='cvapp'>
                <Header didStyleChanged={this.state.style} changeFileRoute={this.changeProfileFile} content={this.state.content} downloadableStyle={this.state.style}/>
                <NavBar
                    tabs={this.navBarOptions}
                    selectTab={this.changeSelectedTab}
                    downloadableStyle={this.state.style}
                />
                <Content
                    display={this.state.selectedPage}
                    sections={this.state.content.sections}
                    downloadableStyle={this.state.style}
                />
                <DownloadAsCvButton
                    onClick={this.renderAllTabs}
                    changeDocumentStyle={this.loadDownloadableStyle}
                    downloadableStyle={this.state.style}
                />
            </div>
        );
    }
}

export default App;
