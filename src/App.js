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
      border: '1px solid red'
    };

    navBarOptions = [];

    constructor(props, _styleChanged$) {
        super(props);

        this.state = {
            style: null,
            selectedPage: [],
            content: {},
        };

        this._styleChanged$ = new Subject(null);
    }

    componentDidMount() {
        fetch('cv-profile/content.json')
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
            });
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

    render() {
        return (
            <div
                style={this.state.style ? this.downloadableStyle : null}
                className={'App'}
                id='cvapp'>
                <Header didStyleChanged={this.state.style} />
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
                />
            </div>
        );
    }
}

export default App;
