import React from "react";
// import { useState } from "react";
import CountUp from "react-countup";
import BannerSlider from "../component/BannerSlider";
import "../component/animate.css";
import AnimatedSection from "../component/AnimatedSection";

const Home = () => {
  // const [showSlider, setShowSlider] = useState(true);
  return (
    <>
      <div className="min-h-screen ">
        {/* Banner/Slider Section */}
        <BannerSlider />

        {/* About Section */}
        <section className="p-8  text-center">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-lg mt-4">
            Welcome to our Turkish Language Learning website! Our mission is to
            help you master Turkish vocabulary, pronunciation, and grammar with
            easy-to-follow lessons and tutorials. Whether you're a beginner or
            advanced learner, we have everything you need to improve your
            skills.
          </p>
        </section>

        {/* Success Section */}
        <section className="bg-blue-100 border rounded-2xl py-8">
          <h2 className="text-center text-2xl font-semibold">Our Success</h2>
          <div className="flex justify-center gap-10 mt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                <CountUp start={0} end={1500} duration={15} />
              </h3>
              <p className="text-gray-600">Users</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                <CountUp start={0} end={10} duration={15} />
              </h3>
              <p className="text-gray-600">Lessons</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                <CountUp start={0} end={250} duration={15} />
              </h3>
              <p className="text-gray-600">Vocabularies</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                <CountUp start={0} end={10} duration={15} />
              </h3>
              <p className="text-gray-600">Tutorials</p>
            </div>
          </div>
        </section>

        {/* Extra Section 1: Feature Highlights */}
        <AnimatedSection animationClass="animate__fadeInRight">
          <section className=" w-[60%] mx-auto p-8 my-element mt-5 mb-10 border rounded-2xl ">
            <h2 className="text-2xl font-semibold text-center">Features</h2>
            <div className="flex justify-center gap-8 mt-6">
              <div className="w-1/3 text-center">
                <h3 className="text-xl font-semibold">Interactive Lessons</h3>
                <p className="text-gray-600 mt-2">
                  Engage with multimedia lessons to improve your Turkish.
                </p>
              </div>
              <div className="w-1/3 text-center">
                <h3 className="text-xl font-semibold">Practice Mode</h3>
                <p className="text-gray-600 mt-2">
                  Test your knowledge with interactive quizzes and games.
                </p>
              </div>
              <div className="w-1/3 text-center">
                <h3 className="text-xl font-semibold">Community Support</h3>
                <p className="text-gray-600 mt-2">
                  Join a community of learners for additional resources and
                  discussions.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
        {/* Extra Section 2: Testimonials */}
        <AnimatedSection animationClass="animate__fadeInLeft">
          <section className=" w-[60%]  text-black py-8 mt-6 my-element-other border rounded-2xl ">
            <h2 className="text-2xl font-semibold text-center">
              What Our Users Say
            </h2>
            <div className="flex justify-center gap-8 mt-6">
              <div className="w-1/3 text-center">
                <p className="italic">
                  "The best Turkish learning experience I've had. I can already
                  hold basic conversations!"
                </p>
                <p className="font-bold mt-2">- Sarah K.</p>
              </div>
              <div className="w-1/3 text-center">
                <p className="italic">
                  "Great lessons! The interactive quizzes are fun and helpful."
                </p>
                <p className="font-bold mt-2">- James T.</p>
              </div>
              <div className="w-1/3 text-center">
                <p className="italic">
                  "I love the community! It's motivating to learn with others."
                </p>
                <p className="font-bold mt-2">- Elena P.</p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Home;
