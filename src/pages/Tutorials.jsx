import { useNavigate } from "react-router-dom";
import Lesson from "../component/Lesson";

const Tutorials = () => {

  const navigate = useNavigate();

  const handleBackToLearngingPage = () => {
      navigate('/StartLearning');  
      
  };


  return (
    <div>
      <div className="text-center mt-5 mb-10 ">
        <h1 className="text-2xl text-lime-600 font-bold">
          Unlock Turkish: Essential Lessons for Beginners
        </h1>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-1 gap-5">
       <div className=" w-[300px] h-[300px] max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out ">
       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DQYWGEOKno4?si=Obz8nBcwXtYwN8y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>

       <div className=" w-[300px] h-[300px]  max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/DQYWGEOKno4?si=Obz8nBcwXtYwN8y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

       <div className=" w-[300px] h-[300px]  max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/acodGMXhJ38?si=RRP8bWO5mf5G6Im5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

       <div className=" w-[300px] h-[300px]  max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/Eqlm_EBNVQY?si=NRP8MWPumMThAhcB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

       <div className=" w-[300px] h-[300px]  max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/um9cHJWVTGc?si=rlXkeCtI6P8A4q5r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

       <div className=" w-[300px] h-[300px]  max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/YD8mj5D53CU?si=Y0FTddpFoZdoCejS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

       <div className=" w-[300px] h-[300px]  max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/WjW8VwLOn9s?si=ywJXHzyXaVrFbIU5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

       <div className=" w-[300px] h-[300px]  max-w-sm rounded-lg overflow-hidden shadow-lg bg-lime-200 p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/oqxn0ogLH7k?si=9wN9WrIrJImmQc1v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

       
      </section>
      <button 
            onClick={handleBackToLearngingPage} 
            className="bg-lime-500 text-white px-6 py-3 rounded-full shadow-lg mt-10 mb-5  "
        >
           Learn Vocabularies
        </button> 

       
    </div>
  );
};
export default Tutorials;
