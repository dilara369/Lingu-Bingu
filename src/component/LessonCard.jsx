import React, { useState } from "react";
import ModalShow from "./ModalShow";

const LessonCard = ({ Lesson }) => {
  console.log(Lesson);
  const {
    word,
    meaning,
    pronunciation,
    difficulty,
    part_of_speech,
    when_to_say,
    example,
    Lesson_no,
  } = Lesson;

  const difficultyColors = {
    easy: "bg-green-200",
    medium: "bg-yellow-200",
    hard: "bg-red-200",
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlePronounce = () => {
    const utterance = new SpeechSynthesisUtterance(pronunciation || word); // use pronunciation or word
    utterance.lang = "tr-TR"; // Optional: Set to Turkish if you want the pronunciation in Turkish
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <div className="p-5 flex justify-center items-center  ">
        <div
          className={` p-5 shadow-blue-200 shadow-xl rounded-lg w-[400px] h-auto  ${difficultyColors[difficulty]}`}
        >
          <h1 className="text-3xl font-bold text-center mb-5">
            Vocabulary - Lesson {Lesson_no}
          </h1>
          <h2 className="text-2xl font-bold">{word}</h2>
          <p>
            <strong>Meaning:</strong> {meaning}
          </p>
          <p>
            <strong>Pronunciation:</strong> {pronunciation}
          </p>
          <p>
            <strong>Part of Speech:</strong> {part_of_speech}
          </p>
          <button
            onClick={openModal}
            className="btn mt-3 rounded-full px-5 py-1 bg-lime-200 text-lime-950"
          >
            When to say
          </button>

          <button
            onClick={handlePronounce}
            className="btn mt-3 rounded-full px-5 py-1 bg-blue-200 text-blue-950 ml-3"
          >
            Pronounce Word
          </button>

          {/* modal start  */}

          <ModalShow isOpen={isOpen} closeModal={closeModal} Lesson={Lesson} />

          {/* modal end  */}
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
