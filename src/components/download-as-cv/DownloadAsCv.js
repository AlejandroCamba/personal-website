import React, { Component } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './DownloadAsCv.css';
import { first } from 'rxjs/operators';

export class DownloadAsCvButton extends Component {
    constructor(props) {
        super(props);
    }

    downloadPdf = () => {
        if(navigator.vendor.match(/apple/i)) {
            alert('Sorry, downloads on safari browsers are not supported. Please change to a different browser or write me an email requesting my CV and i\'ll gladly send it to you! ')
            return;
        }
        
        this.props
            .changeDocumentStyle(true)
            .pipe(first())
            .subscribe((didStyleLoaded) => {
                if (didStyleLoaded) {
                    window.print();
                }
            });
    };

    render() {
        return (
            <div>
                <button className='download-as-cv' onClick={this.downloadPdf}>
                    Download website as CV
                </button>
            </div>
        );
    }
}
