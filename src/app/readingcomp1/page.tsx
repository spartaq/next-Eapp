"use client"

import React, { useState } from 'react';
import HeroReading from '@/components/HeroReading';
import Select from 'react-select';


const Readingcomp1 = () => {
  const [answers, setAnswers] = useState<string[][]>(Array(20).fill(Array(7).fill(''))); // Initialize answers array with empty strings
  const [submitted, setSubmitted] = useState<boolean>(false); // State to track whether the form has been submitted

  const handleChange = (paragraphIndex: number, index: number, selectedOption: { value: string | null }) => {
    const updatedAnswers = [...answers];
    const value = selectedOption ? selectedOption.value : null;
    updatedAnswers[paragraphIndex][index] = value || '';
    setAnswers(updatedAnswers);
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (you can process the answers here)
    console.log("Submitted answers:", answers.flat());
    setSubmitted(true); // Set submitted to true when the form is submitted
  };

    const paragraphs = [
    `When you picture mountain climbers scaling Mount Everest, what probably [comes] to mind are teams of climbers with Sherpa guides [leading] them to the summit, equipped with oxygen masks, supplies and tents. And in most cases you'd be right, as 97 per cent of climbers [use] oxygen to ascend to Everest's summit at 8,850 metres above sea level. The thin air at high altitudes [makes] most people breathless at 3,500 metres, and the vast majority of climbers [use] oxygen past 7,000 metres. A typical climbing group [will have] 8–15 people in it, with an almost equal number of guides, and [they'll spend] weeks to get to the top after reaching Base Camp.`,
    `Another paragraph goes here...`
  ];

  const answersInParagraphs = [
    [
      { correct: 'comes', incorrect: ['running', 'walks'] },
      { correct: 'leading', incorrect: ['following', 'guiding'] },
      { correct: 'use', incorrect: ['employ', 'utilize'] },
      { correct: 'makes', incorrect: ['forces', 'lets'] },
      { correct: 'use', incorrect: ['utilize', 'employ'] },
      { correct: 'will have', incorrect: ['has', 'got'] },
      { correct: 'they\'ll spend', incorrect: ['spend', 'spent'] }
    ],
    // Add answers for the second paragraph here
  ];

  // Construct options array based on answersInParagraphs
  const options = answersInParagraphs.map(paragraphAnswers =>
    paragraphAnswers.map(answer => [answer.correct, ...answer.incorrect])
  ).flat();

 
  // Check if all answers are correct
  const allCorrect = answers.flat().every((answer, index) => answer === (answersInParagraphs.flat()[index]?.correct || '')) && submitted;

  return (
    <div>
      <HeroReading />
      <div className="readingcomp-container">
        <div className="title">Exercise Title</div>
        <div className="instructions">Instructions for the exercises go here.</div>
        <form onSubmit={handleSubmit}>
          {paragraphs.map((paragraph, paragraphIndex) => (
            <div key={paragraphIndex} className="paragraph-container">
              <div className="subtitle">Subtitle Here</div>
              <div className="paragraph">
                {paragraph.split(/\[[^\]]+\]/).map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {answersInParagraphs[paragraphIndex]?.[index] &&
                     <Select
                     value={answers[paragraphIndex][index] ? { value: answers[paragraphIndex][index], label: answers[paragraphIndex][index] } : { value: '', label: '' }}
                     options={options[paragraphIndex * 7 + index].map(opt => ({ value: opt, label: opt }))}
                     onChange={(selectedOption: any, actionMeta: any) => handleChange(paragraphIndex, index, selectedOption)}
                   />                                                       
                    }
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
          {allCorrect && submitted && <p>Good Job!</p>}
          <button type="submit">Check Answers</button>
        </form>
      </div>
    </div>
  );
};

export default Readingcomp1;



