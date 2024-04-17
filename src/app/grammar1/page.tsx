"use client"

import HeroGrammar from '@/components/HeroGrammar'
import React, { useState } from 'react';

const Grammar1 = () => {
  const [answers, setAnswers] = useState(Array(20).fill('')); // Initialize answers array with 20 empty strings
  const [evaluation, setEvaluation] = useState(Array(20).fill('')); // Initialize evaluation array with 20 empty strings

  const handleChange = (index: number, e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value; // Update the answer at the specified index
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedEvaluation = answers.map((answer, index) => {
      return answer === answersList[index][0] ? 'correct' : 'incorrect';
    });
    setEvaluation(updatedEvaluation);
  };

  const sentences = [
    "When I was a child, I ___ my bed every morning before going to school.",
    "Yesterday, I ___ my homework.",
    "Last week, we ___ a trip to the beach.",
    "She ___ a new dress for the party.",
    "We ___ pizza for dinner last night.",
    "He ___ his car keys at home.",
    "My mom ___ me a present for my birthday.",
    "They ___ their friends at the park.",
    "I ___ my favorite book yesterday.",
    "She ___ to the concert with her friends.",
    "We ___ basketball at the gym yesterday.",
    "He ___ his phone at the store.",
    "Yesterday, I ___ to the museum.",
    "They ___ a delicious meal at the restaurant.",
    "My sister ___ her dog for a walk.",
    "I ___ a new song on the radio yesterday.",
    "We ___ a movie at home last night.",
    "He ___ his coffee on the table.",
    "She ___ her homework after school.",
    "Yesterday, we ___ to the zoo.",
  ];

  const answersList = [
    ["made", "maked", "make"],
    ["did", "done", "do"],
    ["took", "take", "taked"],
    ["bought", "buy", "buyed"],
    ["ate", "eat", "eated"],
    ["left", "leave", "leaved"],
    ["gave", "give", "gived"],
    ["met", "meet", "meeted"],
    ["read", "readed", "red"],
    ["went", "go", "goed"],
    ["played", "play", "played"],
    ["forgot", "forget", "forgat"],
    ["visited", "visit", "visited"],
    ["had", "have", "haved"],
    ["walked", "walk", "walked"],
    ["heard", "hear", "heared"],
    ["watched", "watch", "watched"],
    ["spilled", "spill", "spilled"],
    ["finished", "finish", "finished"],
    ["saw", "see", "seed"],
  ];

  return (
    <div>
        <HeroGrammar />
    <div className="grammar-container">
      <div className="title">Simple Past</div>
      <div className="instructions">Instructions for the exercises go here.</div>
      <form onSubmit={handleSubmit}>
        {sentences.map((sentence, index) => {
          const parts = sentence.split("___");
          return (
            <div key={index}>
              <p>
                <span className="circle">{index + 1}</span>
                {parts[0]}
                <select value={answers[index]} onChange={(e) => handleChange(index, e)}>
                  <option value="">Choose an option</option>
                  {answersList[index].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>{option}</option>
                  ))}
                </select>
                {parts[1]}
                {evaluation[index] === 'correct' ? ' ✔️' : evaluation[index] === 'incorrect' ? ' ❌' : ''}
              </p>
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Grammar1;
