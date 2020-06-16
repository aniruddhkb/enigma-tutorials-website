import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import '../styles/ShowTutorial.css'

function ShowTutorial(props) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <nav>
                <button>Prev</button>
                <button>Next</button>
            </nav>
            <Document className='tutorial-pdf'
                file={`${process.env.PUBLIC_URL}/pdfs/${props.fileName}`}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber}></Page>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </>
    );
}

export default ShowTutorial
