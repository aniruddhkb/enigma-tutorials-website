import React, { useState, useEffect, useReducer } from 'react'
import Pdf from '@mikecousins/react-pdf';
import '../styles/ShowTutorial.css'

function ShowTutorial({ match }) {
    const [file, setFiles] = useState(0);
    const [pdfFile, setPdfFile] = useState(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/pdfs/contents.json`)
            .then(r => r.json())
            .then(data => setFiles(data.items[match.params.id]))
            .catch(err => console.error(`Could not load metadata JSON file: ${err}`));
    }, [match.params.id]);

    const reducer = (state, action) => {
        switch(action.type){
            case "next": return {page: state.page + 1};
            case "previous": return {page: state.page - 1};
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {page: 1})

    useEffect(() => {
        setPdfFile(file?<Pdf file={`${process.env.PUBLIC_URL}/pdfs/${file.fileName}`} page={state.page}>
            {/* eslint-disable no-unused-vars */}
            {({ pdfDocument, pdfPage, canvas }) => (
                <>
                    {!pdfDocument && <span>Loading...</span>}
                    {canvas}
                    {Boolean(pdfDocument && pdfDocument.numPages) && (
                        <nav>
                            <ul className="pager">
                                <li className="previous">
                                    <button className='btn'
                                        disabled={state.page === 1}
                                        onClick={() => dispatch({type: 'previous'})}
                                    >
                                        Previous
                  </button>
                                </li>
                                <li className="next">
                                    <button className='btn'
                                        disabled={state.page === pdfDocument.numPages}
                                        onClick={() => dispatch({type: 'next'})}
                                    >
                                        Next
                  </button>
                                </li>
                            </ul>
                        </nav>
                    )}
                </>
            )}
        </Pdf>:null)
    }, [file, state.page])

    return (
        <div className="tutorial-article">
            <p>Author: {file.author}</p>
            <p>Date: {file.date}</p>
            {pdfFile}

            <a className="download-link btn" href={`${process.env.PUBLIC_URL}/pdfs/${file.fileName}`} download target="_blank" rel="noopener noreferrer">Download file</a>
        </div>
    );
}

export default ShowTutorial
