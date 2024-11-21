
import {  useNavigate } from "react-router-dom";
import '../component/style.css'


const StartLearning =()=> {
  const navigate =useNavigate()
  const handleBackToLogin = () => {
    navigate('/login');    

};
const handleCardClick = (Lesson_no) => {
  navigate(`/Lesson/${Lesson_no}`);
};


  return (
    <div>
 
<div  class="grid lg:grid-cols-3 md:grid-cols-1 gap-10 p-5 ">
 
  <div onClick={()=>handleCardClick(1)} class="learningcard" id="lesson-1">
    <div class="learningcard-content">
      <h2>Lesson-1</h2>
    </div>
  </div>
 

  <div onClick={()=>handleCardClick(2)} class="learningcard" id="lesson-2">
    <div class="learningcard-content">
      <h2>Lesson-2</h2>
    </div>
  </div>

  <div onClick={()=>handleCardClick(3)} class="learningcard" id="lesson-3">
    <div class="learningcard-content">
      <h2>Lesson-3</h2>
    </div>
  </div>

  <div onClick={()=>handleCardClick(4)} class="learningcard" id="lesson-4">
    <div class="learningcard-content">
      <h2>Lesson-4</h2>
    </div>
  </div>

  <div  onClick={()=>handleCardClick(5)} class="learningcard" id="lesson-5">
    <div class="learningcard-content">
      <h2>Lesson-5</h2>
    </div>
  </div>

  <div onClick={()=>handleCardClick(6)} class="learningcard" id="lesson-6">
    <div class="learningcard-content">
      <h2>Lesson-6</h2>
    </div>
  </div>

  <div onClick={()=>handleCardClick(7)} class="learningcard" id="lesson-7">
    <div class="learningcard-content">
      <h2>Lesson-7</h2>
    </div>
  </div>

  <div onClick={()=>handleCardClick(8)} class="learningcard" id="lesson-8">
    <div class="learningcard-content">
      <h2>Lesson-8</h2>
    </div>
  </div>

  <div onClick={()=>handleCardClick(9)} class="learningcard" id="lesson-9">
    <div class="learningcard-content">
      <h2>Lesson-9</h2>
    </div>
  </div>

  <div onClick={()=>handleCardClick(10)} class="learningcard" id="lesson-10">
    <div class="learningcard-content">
      <h2>Lesson-10</h2>
    </div>
  </div>

</div>
{/* Tutorial Section  */}
<h2 className="mt-10 mb-10 lg:text-2xl md:text-md font-semibold text-blue-950 text-center"><span className="text-lime-400 font-bold"> Tutorial Section</span> <br />Lets Learn Alphabets From YouTube</h2>
<section className=" mb-10 grid lg:grid-cols-3 md:grid-cols-1 gap-5  ">
  <div className=" border-4  p-5 border-gray-700 rounded-2xl w-[300px] h-[300px]">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uFDsEUeGoMM?si=Cgwq8GB7MYfqlARR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div className=" border-4  p-5 border-gray-700 rounded-2xl w-[300px] h-[300px]">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MYr1WOvpkPU?si=fX5C3m33g5HiuJxe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div className=" border-4  p-5 border-gray-700 rounded-2xl w-[300px] h-[300px]">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dG40fClCUTw?si=tcfJYUe9lmB6B7BN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
 
      <button onClick={handleBackToLogin} className="p-3 bg-lime-500 text-white rounded-md hover:bg-blue-600">
        View More
      </button>
   

</section>

        
    </div>
  )
}
export default StartLearning ;