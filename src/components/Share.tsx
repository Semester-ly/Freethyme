import React, { useState } from 'react';

const Share = () => {
    const [ copied, setCopied ] = useState(false);

    return (
        <div>
            <button 
                className="btn btn--share btn__text" 
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopied(true);
                }}>
                Share
            </button>           
            {copied ? <span style={{color: 'black'}}>Link copied.</span> : null}
        </div>
    )
}

export default Share;
