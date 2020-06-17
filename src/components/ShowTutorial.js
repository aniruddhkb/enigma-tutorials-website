import React, { useState, useEffect } from 'react'
import '../styles/ShowTutorial.css'

function ShowTutorial({ match }) {
    const [tutorial, setTutorial] = useState(0);
    let authors = null, topics = null, desc = null, descImages = null, descVideos = null, fileLinks = null, referenceLinks = null;

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/pdfs/contents.json`)
            .then(r => r.json())
            .then(data => setTutorial(data.items[match.params.id]))
            .catch(err => console.error(`Could not load metadata JSON file: ${err}`));
    }, [match.params.id]);

    if (tutorial !== 0) {
        authors = tutorial.authors.join(", ");

        topics = tutorial.topics.map((topic, idx) =>
            <div key={idx} className="tutorial-topic"> {topic} </div>
        );

        desc = tutorial.description.text.map((block, idx) =>
            <p key={idx} className="tutorial-desc">{block}</p>
        );

        descImages = tutorial.description.image_links.map((image, idx) =>
            <img key={idx} className="desc-image" src={image} alt="URL moved!"></img>
        );

        descVideos = tutorial.description.video_links.map((video, idx) =>
            <iframe key={idx} className="desc-video" src={video.split("watch?v=").join("embed/")} title={idx}  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );

        fileLinks = tutorial.file_names.map((file, idx) =>
            <a key={idx} className="tutorial-pdf" href={`${process.env.PUBLIC_URL}/pdfs/${file}`} target="_blank" rel="noopener noreferrer">View {file}</a>
        );

        referenceLinks = tutorial.reference_links.map((link, idx) =>
            <a key={idx} className="reference-link" target="_blank" rel="noopener noreferrer" href={link.href}>{link.name ? link.name : link.href}</a>
        );
    }
    return (
        <>
            {tutorial ?
                <div className="tutorial-article">
                    <p className="tutorial-title">{tutorial.title}</p>
                    <div className="tutorial-info">
                        <div className="tutorial-authors"> {authors} </div>
                        <div className="tutorial-created-date">Created: {tutorial.created_date}</div>
                        <div className="tutorial-updated-date">Updated: {tutorial.last_update} </div>
                    </div>
                    <div className="tutorial-topics">
                        {topics}
                    </div>
                    <hr />
                    <p id="description">Description</p>
                    {desc}
                    <div className="tutorial-images">
                    {descImages}
                    </div>
                    <div className="tutorial-vids">
                    {descVideos}
                    </div>
                    <hr />
                    <p id="description">Reference Links</p>
                    <div className="tutorial-links">
                        {fileLinks}
                        {referenceLinks}
                    </div>
                </div> : "Loading..."}
        </>
    );
}

export default ShowTutorial
