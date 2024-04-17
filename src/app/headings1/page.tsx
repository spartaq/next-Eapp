"use client"

import React, { useState } from 'react';
import HeroReading from '@/components/HeroReading';
import Select from 'react-select';

interface Paragraph {
  text: string;
  choices: string[];
  correctChoice: string;
  indicator: null | string;
}

const Headings1 = () => {
  const initialParagraphs: Paragraph[] = [
    {
      text: "Europeans tend to be skeptical about the consumption of genetically modified foods and there is strong consumer pressure, supported by the Green parties, to ban farmers from growing GM crops in the European Union (EU). However 5.5 million farmers worldwide, mainly in the US, Argentina, Canada and China, now grow GM crops covering more than 50 million hectares, an area the size of Spain. Other Asian countries such as India are enthusiastic and Indonesia is about to join the GM club, so despite the Europeans, GM crop growth is increasing globally.",
      choices: ["Environmentalists’ reaction", "Differing yields in developing and 'first' worlds", "Hong Kong government's 'marketing' of GM foods", "Legal implications", "Reactions to GM cotton", "Growing importance of GM foods", "Attitudes worldwide to GM foods", "Supermarkets' policy", "GM crops and viruses", "Increased yields in Bt cotton"],
      correctChoice: "Growing importance of GM foods",
      indicator: null
    },
    {
      text: "Park'n'Shop and Wellcome allow distribution of the GM newsletter, but a spokeswoman said this did not necessarily imply active approval of GM foods, adding they had previously helped the government deliver a series of education leaflets, posters and information on SARS and dengue fever. 'Our policy on GM food is neutral' she said.",
      choices: ["Environmentalists’ reaction", "Differing yields in developing and 'first' worlds", "Hong Kong government's 'marketing' of GM foods", "Legal implications", "Reactions to GM cotton", "Growing importance of GM foods", "Attitudes worldwide to GM foods", "Supermarkets' policy", "GM crops and viruses", "Increased yields in Bt cotton"],
      correctChoice: "Supermarkets' policy",
      indicator: null
    }
  ];

  const [paragraphs, setParagraphs] = useState<Paragraph[]>(initialParagraphs);
  const [selectedChoices, setSelectedChoices] = useState<string[]>(Array(initialParagraphs.length).fill(''));
  const [submissionError, setSubmissionError] = useState(false);

  const handleChoiceSelect = (index: number, selectedOption: { value: string }) => {
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[index] = selectedOption.value;
    setSelectedChoices(newSelectedChoices);
  };

  const checkAnswers = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedChoices.includes('')) {
      setSubmissionError(true);
      return;
    }
    setSubmissionError(false);

    const updatedParagraphs = paragraphs.map((paragraph, index) => {
      const isCorrect = selectedChoices[index] === paragraph.correctChoice;
      return {
        ...paragraph,
        indicator: isCorrect ? '✔️' : null // Set indicator to null if not correct
      };
    });

    setParagraphs(updatedParagraphs);
  };

  const resetSelectedChoices = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedChoices(Array(initialParagraphs.length).fill(''));
    setParagraphs(initialParagraphs.map(paragraph => ({ ...paragraph, indicator: null })));
  };

  return (
    <div>
      <HeroReading />
      <div className="readingcomp-container">
        <div className="title">Paragraph Headings</div>
        <div className="instructions">Choose the best heading to match each paragraph</div>
        <h1>Divided Opinions Over Genetically Modified Crops and Foods</h1>
        <form onSubmit={checkAnswers}>
          {paragraphs.map((paragraph, index) => (
            <div key={index}>

             
          <Select
            value={selectedChoices[index] !== '' ? { value: selectedChoices[index], label: selectedChoices[index] } : { value: '', label: '' }}
            onChange={(selectedOption) => selectedOption && handleChoiceSelect(index, { value: selectedOption.value })}
            options={paragraph.choices.map(choice => ({ value: choice, label: choice }))}
          />




              {paragraph.indicator && <div style={{ marginLeft: '5px', fontSize: '20px', color: paragraph.indicator === '✔️' ? 'green' : 'red' }}>{paragraph.indicator}</div>}
              <p style={{ marginLeft: '50px', marginRight: '50px', fontSize: '15px' }}>{paragraph.text}</p>
            </div>
          ))}
          {submissionError && <p style={{ color: 'red', marginLeft: '50px' }}>Please answer all paragraphs before checking answers.</p>}
          <button type="submit" style={{ marginLeft: '50px', marginRight: '10px' }}>Check Answers</button>
          <button onClick={resetSelectedChoices} style={{ marginRight: '10px' }}>Reset Choices</button>
        </form>
      </div>
    </div>
  );
};

export default Headings1;

