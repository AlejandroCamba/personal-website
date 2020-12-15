import React, { Component } from 'react';
import { ContactFormRenderer } from './renderers/ContactFormRenderer';
import { ListRenderer } from './renderers/ListRenderer';
import { PortfolioProjectRenderer } from './renderers/PortfolioProjectRenderer';
import { SkillSetRenderer } from './renderers/SkillSetRenderer';
import { TextRenderer } from './renderers/TextRenderer';
import './Content.css';
import { MenuRenderer } from './renderers/MenuRenderer';

export class Content extends Component {
    downloadableStyle = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '1087px',
        width: '943px',
        margin: '0',
        fontSize: '12px',
    };

    sectionRendererMap = new Map([
        ['contactForm', (content) => <ContactFormRenderer />],
        ['list', (content, style, options) => <ListRenderer list={content} value={options.key}/>],
        ['projects', (content) => <PortfolioProjectRenderer projects={content} />],
        ['skills', (content) => <SkillSetRenderer skillList={content} />],
        ['menu', (content, style, options) => <MenuRenderer downloadableStyle={style} tabs={content.tabs} children={options.children}/>],
        [
            'text',
            (content, style, options) => <TextRenderer parragraph={content} downloadableStyle={style} value={options.key} />,
        ],
    ]);

    contentToRender = null;

    constructor(props) {
        super(props);
    }

    renderSections = (display, downloadAsCvStyle) => {
        console.log('pasa...');
        return display?.map((section) => {
            if (section && section.structure) {
                return section.structure.map((sectionElement) => {
                    if (sectionElement.structure) {
                        return this.sectionRendererMap.get(sectionElement.contentName)(
                          sectionElement.content,
                          downloadAsCvStyle,
                          { children: this.renderSections([sectionElement]) }
                        );

                    } else {
                        return this.sectionRendererMap.get(sectionElement.contentName)(
                            sectionElement.content,
                            downloadAsCvStyle,
                            {
                              key: sectionElement.key
                            }
                        );
                    }
                });
            }
        });
    };

    render() {
        return (
            <div
                className='content-body'
                style={this.props.downloadableStyle ? this.downloadableStyle : null}
            >
                {this.renderSections(this.props.display, this.props.downloadableStyle)}
            </div>
        );
    }
}
