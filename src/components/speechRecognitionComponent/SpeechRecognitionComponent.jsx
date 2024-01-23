import React, { useEffect } from 'react';

const SpeechRecognitionComponent = ({ onSpeechResult }) => {
  useEffect(() => {
    const startSpeechRecognition = () => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        console.error('SpeechRecognition API not supported in this browser.');
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        onSpeechResult(text);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.start();
    };

    document.body.addEventListener('click', startSpeechRecognition);

    return () => {
      document.body.removeEventListener('click', startSpeechRecognition);
    };
  }, [onSpeechResult]);

  return null;
};

export default SpeechRecognitionComponent;
