import React from 'react';

const Share = () => {

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href);

        let prompt = document.getElementById("1") as HTMLElement
        prompt.style.display = "";

        const hidePrompt = () => {
            prompt.style.display = "none"
        }
        setTimeout(hidePrompt, 1500)
    }
    
    return (
        <div>
            <button 
                className="btn btn--share btn__text" 
                onClick={handleClick}>
                Share
            </button>           
           <span id = "1" style={{color: 'black', display: "none"}}>Link copied.</span>
        </div>
    )
}

export default Share;
