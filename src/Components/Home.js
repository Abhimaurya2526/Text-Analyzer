import React from 'react';
import "./Home.css";

const Home = (props) => {
  const isDarkMode = props.mode === 'dark'; // Assuming 'dark' mode triggers the color change

  return (
    <div className={`home ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Project Description</h2>
      <div className={`section ${props.mode}`}>
        <p id="textEditor">
          This text editor is a versatile tool equipped with essential functionalities
          for text manipulation. Users can seamlessly transform text with options to convert to 
          uppercase, lowercase, or capitalize the first letter of each word. Additionally, 
          the editor facilitates the cleaning of text by efficiently removing extra spaces 
          between words, ensuring a neat and well-formatted result. This feature set is particularly 
          beneficial for writers, editors, and anyone working with textual content, providing a
          user-friendly interface for enhancing consistency and readability in their documents. 
          The editor's intuitive design makes it an indispensable tool for tasks ranging from document 
          preparation to code editing, where precise text formatting is paramount.
        </p>
      </div>
    </div>
  );
};

export default Home;
