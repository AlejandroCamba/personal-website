import React, { Component } from 'react';
import './styles/contact.css';

export class ContactFormRenderer extends Component {
    downloadableStyle = {
        width: '496px',
        flex: '0 1'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <form className="contact-form">
                    <div>
                        <input type='text'></input>
                    </div>
                    <div>
                    <textarea name="textarea" rows="10" cols="50" placeholder="Write something here"></textarea>
                    </div>
                    <div>
                        <button><b>SEND</b></button>
                    </div>
                </form>
            </div>
        );
    }
}
