import Image from 'next/image'

const HeroMain = () => {
  return (
    <div className="heromain">
      <div className="textpics">
        <div className="heromaintext">
          <h1>WELCOME TO ENGLISH EXAM PRACTICE</h1>
          <h2>Practice exercises for TOEFL, EuroExam, Cambridge, Oxford, High School Finals, and more!</h2>
        </div>
        <div className="heromainpic">
          <Image
            src="/AA-man-standing.png"
            width={500}
            height={500}
            alt="Todd Williams"
          />
        </div>
    </div>
  </div>
  );
};

export default HeroMain;