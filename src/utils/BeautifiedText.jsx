import React from 'react';
import { marked } from 'marked';

const BeautifiedText = ({ text }) => {
  // Set options for marked if needed
  marked.setOptions({
    breaks: true, // Line breaks as <br> for single newlines
    gfm: true,    // GitHub flavored markdown
  });

  // Convert the input text into HTML using marked
  const createMarkup = (text) => {
    const html = marked(text);
    return { __html: html };
  };

  return (
    <div
      className="beautified-text leading-loose text-lg"
      dangerouslySetInnerHTML={createMarkup(text)} // Render HTML
    />
  );
};

export default BeautifiedText;
