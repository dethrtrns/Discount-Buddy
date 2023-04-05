import React, { useState, useEffect } from "react";

export default function TypingAnimation({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timerId = null;
    let i = 0;

    function typeNextCharacter() {
      if (i < text.length) {
        setDisplayedText((prevText) => prevText + text.charAt(i));
        i++;
        timerId = setTimeout(typeNextCharacter, 50);
      }
    }

    typeNextCharacter();

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  return <span>{displayedText}</span>;
}
