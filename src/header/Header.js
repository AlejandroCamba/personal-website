import React, { Component } from 'react';
import './Header.css';
import profile from './CV-profile.png'

export class Header extends Component {
    downloadableStyle = {
        heading: {
          fontSize: '26px',
          textAlign: 'left'
        },
        contact: {
          marginTop: '0',
          display: 'block',
          fontSize: '14px'
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log('props', this.props);
        return (
            <div>
                <div
                    className='heading'
                >
                    <h1 className="title" style={this.props.didStyleChanged ? this.downloadableStyle.heading : null}><b className="name">{this.props.content.name}</b> {this.props.content.title}</h1>
                    <div className="contact-info" style={this.props.didStyleChanged ? this.downloadableStyle.contact : null}>
                      <span className="contact-content"><b>Address:</b> Caracas, Venezuela</span>
                      <label className="contact-content"><b>Phone:</b> +58 424 8498826</label>
                      <label className="contact-content"><b>Email:</b> alejandroantoniocamb@gmail.com</label>
                      <label className="contact-content"><b>Date of Birth:</b> 14/10/1994 (dd/mm/yyyy)</label>
                      <label className="contact-content"><b>Civil Status:</b> Single</label>
                    </div>
                    <img src={profile} className="profile-pic" style={!this.props.downloadableStyle ? {display: 'none'} : {display: 'block'} }></img>
                    <div className="languages" style={this.props.downloadableStyle ? {display: 'none'} : {display: 'block'} }>
                        <ul>
                            <li onClick={() => this.props.changeFileRoute('ES')}>ES</li>
                            <li onClick={() => this.props.changeFileRoute('EN')}>EN</li>
                            <li onClick={() => this.props.changeFileRoute('DE')}>DE</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
