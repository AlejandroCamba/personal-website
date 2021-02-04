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
        cvTitle: {
            display: true,
            marginBottom: '-2px',
        },
    };

    sectionRendererMap = new Map([
        ['contactForm', (content) => <ContactFormRenderer />],
        [
            'list',
            (content, style, options) => (
                <ListRenderer list={content} value={options.key} downloadableStyle={style} />
            ),
        ],
        ['projects', (content) => <PortfolioProjectRenderer projects={content} />],
        [
            'skills',
            (content, style, options) => (
                <SkillSetRenderer
                    skillList={content}
                    value={options.key}
                    downloadableStyle={style}
                />
            ),
        ],
        [
            'menu',
            (content, style, options) => (
                <MenuRenderer
                    downloadableStyle={style}
                    tabs={content.tabs}
                    children={options.children}
                />
            ),
        ],
        [
            'text',
            (content, style, options) => (
                <TextRenderer parragraph={content} downloadableStyle={style} value={options.key} />
            ),
        ],
    ]);

    contentToRender = null;

    constructor(props) {
        super(props);
    }

    renderSections = (display, downloadAsCvStyle) => {
        return display?.map((section) => {
            if (section && section.structure) {
                console.log('SECTION', section);
                return [
                    <h1
                        style={
                            this.props.downloadableStyle 
                                ? this.downloadableStyle.cvTitle
                                : null
                        }
                    >
                        { section.tabName !== 'Profile' && section.tabName !== 'Profil' && section.tabName !== 'Perfil' ? section.tabName : '' }
                    </h1>,
                    section.structure.map((sectionElement) => {
                        if (sectionElement.structure) {
                            return this.sectionRendererMap.get(
                                sectionElement.contentName
                            )(sectionElement.content, downloadAsCvStyle, {
                                children: this.renderSections([sectionElement]),
                            });
                        } else {
                            return [
                                <h1
                                    style={
                                        this.props.downloadableStyle
                                            ? this.downloadableStyle.cvTitle
                                            : null
                                    }
                                >
                                    {sectionElement.key}
                                </h1>,
                                this.sectionRendererMap.get(sectionElement.contentName)(
                                    sectionElement.content,
                                    downloadAsCvStyle,
                                    {
                                        key: sectionElement.key,
                                    }
                                ),
                            ];
                        }
                    }),
                ];
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
