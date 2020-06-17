import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Tutorials() {
    const [fileData, setFiles] = useState(0);

    useEffect(() => {
        fetch(`pdfs/contents.json`)
            .then(r => r.json())
            .then(data => setFiles(data.items))
            .catch(err => console.error(`Could not load metadata JSON file: ${err}`));
    }, []);

    let tutorialLinks = null;
    if (fileData !== 0){
        tutorialLinks =
            fileData.map((item) => <li key={item.fileName}><Link to={`tutorials/${item.id - 1}`}>{`${item.fileName} by ${item.author}`}</Link></li>)
    }

    return (
        <div className="tutorials">
            <p className="tags">Tutorials</p>
            <hr />
            <strong>Will be adding the tutorials structure here</strong>
            <hr />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum autem ducimus repellendus ratione aut
      voluptatem veritatis maiores, ab laboriosam ex consequuntur quibusdam fugiat rem labore similique. Nihil, sapiente
      fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, itaque quasi exercitationem, adipisci soluta
      maxime autem tenetur vitae animi, veritatis molestiae quia reprehenderit dicta ut dolores in quaerat obcaecati
      voluptatibus?
            <ul>
                {tutorialLinks}
            </ul>
        </div>
    )
}

export default Tutorials
