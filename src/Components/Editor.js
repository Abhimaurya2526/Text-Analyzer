import React from 'react'
import { useState } from 'react'
import "./Editor.css"
import "./Header"
const Editor = (props) => {

    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    


    const handleChange = (e) => {
        setText(e.target.value);
    }
    const uppercase = () => {
        const uppercasetext = text.toUpperCase();
        setText(uppercasetext);
    }

    const RemoveText = () => {
        const remove = text.replace(text, '');
        setText(remove);
    }

    const lowercase = () => {
        const lowercasetext = text.toLowerCase();
        setText(lowercasetext);
    }
    const capitalizeFirstLetter = () => {
        const words = text.split(' ');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const capitalizedText = capitalizedWords.join(' ');
        setText(capitalizedText);
    };
    const trimmedText = () => {
        const trimmedText = text.replace(/\s+/g, ' ').trim();
        setText(trimmedText);
    }
    const sentenceCase = () => {
        const sentences = text.split('. ');
        const sentenceCasedText = sentences.map((sentence) => {
            const trimmedSentence = sentence.trim();
            return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
        });
        const resultText = sentenceCasedText.join('.');
        setText(resultText);
    };
    
    const copyText = () => {
        const trimmedText = text.trim();
        navigator.clipboard.writeText(trimmedText)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000); 
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);
            });

    };



    return (

        <div className='container mt-5 p-3 editor ' style={{color: props.mode === 'dark' ? 'white': 'grey'}}>
            <h1>Enter your text to Analaye</h1>
            <div className="my-3">
                <textarea
                    style={{backgroundColor: props.mode === 'dark' ? 'white': 'white',
                    color: props.mode === 'dark' ? 'black': 'black',
                    height: '200px'
                  }}
                    value={text}
                    onChange={handleChange}
                    className="form-control"
                    
                ></textarea>
            </div>
            <div className='d-flex container-fluid flex-wrap'>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={uppercase}>Uppercase</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={lowercase}>Lowercase</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={capitalizeFirstLetter}>Capitalise</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={trimmedText}>RemoveSpace</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={RemoveText}>RemoveText</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={copyText}>CopyText</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={sentenceCase}>Sentence Case</button>
            </div>

            
            {isCopied && (
                <div style={{ position: 'fixed', top: '50px', left: 0, width: '100%', background: 'green', color: '#fff', textAlign: 'left', padding: '10px' }}>
                 Copied to clipboard
                </div>
            )}
            <div className='Cotainer my-3 ' style={{color: props.mode === 'dark' ? 'white': 'grey'}}>
                <h2>Text Summery</h2>
            </div>
            <div className='preview'>
                <h2> Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Editor



