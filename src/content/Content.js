import React, { Component } from 'react';
import { ContactFormRenderer } from './renderers/ContactFormRenderer';
import { ListRenderer } from './renderers/ListRenderer';
import { PortfolioProjectRenderer } from './renderers/PortfolioProjectRenderer';
import { SkillSetRenderer } from './renderers/SkillSetRenderer';
import { TextRenderer } from './renderers/TextRenderer';
import './Content.css';

export class Content extends Component {
  downloadableStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '1087px',
    width: '943px',
    margin: '0',
    border: '1px solid blue',
    fontSize: '12px'
  };
  
    sectionRendererMap = new Map([
        ['contactForm', (content) => <ContactFormRenderer/>],
        ['list', (content) => <ListRenderer list={content} />],
        ['projects',  (content) => <PortfolioProjectRenderer projects={content} />],
        ['skills', (content) => <SkillSetRenderer skillList={content} />],
        ['text', (content, style) => <TextRenderer parragraph={content} downloadableStyle={style}/>],
    ]);

    contentToRender = null;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-body" style={ this.props.downloadableStyle ? this.downloadableStyle : null }>
                {this.props.display?.map((section) => {
                    if (section && section.structure) {
                      return section.structure.map((sectionElement) => {
                        return this.sectionRendererMap.get(sectionElement.contentName)(sectionElement.content, this.props.downloadableStyle)                        
                      }
                    );
                    }
                })}
            </div>
        );
    }
}
