import React from "react";
import { useNavigate } from "react-router-dom";

const ModalShow = ({ isOpen, closeModal, Lesson }) => {
    const navigate = useNavigate()
    const handleModalNavigate=()=>{
        navigate('/StartLearning');
    }
  const {
    word,
    meaning,
    when_to_say,
    example,
  } = Lesson;

  if (!isOpen) return null;

  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">{word}</h3>
      <p className="py-4">
        {" "}
        <span className="text-yellow-500"> Meaning:</span> {meaning}
      </p>
      <h3 className="font-bold text-lime-500">
        <span className="text-yellow-500"> When To Say:</span> {when_to_say}
      </h3>
      <h3> Example: {example}</h3>
      <div className="modal-action">
        <form method="dialog">
    
        <button onClick={handleModalNavigate} className="btn bg-lime-300">Back to Lesson </button>
    <button onClick={closeModal} className="btn bg-lime-300">
            Close
          </button>
  
        
        </form>
      </div>
    </div>
  );
};

export default ModalShow;
