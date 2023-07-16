"use client";
import { React, useEffect, useState } from "react";
require('dotenv').config();

const apiKey = process.env.API_KEY;

function QuizQuestion() {
  const [link, setData] = useState([]);

  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiKey);
        const json = await response.json();
        setData(json);

        console.log(json);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserAnswers((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitQuiz = () => {
    // console.log(link[0].Answer);
    let counter = 0;
    Object.entries(userAnswers).forEach(([fieldName, value]) => {
      // console.log(fieldName, value);

      if (link[parseInt(fieldName) - 1].Answer === value) {
        counter = counter + 1;
        setScore(counter);
      }
    });
    setButtonDisabled("cursor-not-allowed");
  };

  return (
    <>
      {" "}
      <div className="">
        <div className="mt-10 sm:mt-0 bg-blue ">
          <div className="md:grid md:grid-cols-3 md:gap-6 ">
            <div className="md:col-span-1 box-border md:box-content">
              <div className="px-4 sm:px-0 sticky top-24">
                <h3 className="text-lg font-medium leading-6 text-gray-900 bg-yell-900">
                  Grid 1{/* <input type="checkbox" /> */}
                </h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
              <div className=" sticky top-44">Score:{score}</div>
            </div>
            
            <div className="mt-5 md:w-11/12 md:mt-0 md:col-span-2 justify-end ">
              {link.map((link, key) => (
                <div className="overflow-hidden  sm:rounded-md " key={key}>
                  <div className="px-4 py-5  space-y-6 sm:p-6">
                    <fieldset className="box-border  border-1 bg-white  border-gray-100">
                      <legend className="text-base font-medium text-gray-900">
                        {link.id}
                        {"."}
                        {link.Q}
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              // name={link.id}
                              // here i am change the name value and assining with the key value pair
                              name={link.id}
                              type="radio"
                              value={"a"}
                              onChange={handleChange}
                              // checked={userAnswers[key] === "a"}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <p className="text-gray-500">{link.a}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              // name={link.id}
                              name={link.id}
                              type="radio"
                              value={"b"}
                              onChange={handleChange}
                              // checked={userAnswers[key] === "b"}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <p className="text-gray-500">{link.b}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              // name={link.id}
                              name={link.id}
                              value={"c"}
                              onChange={handleChange}
                              // checked={userAnswers[key] === "c"}
                              type="radio"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <p className="text-gray-500">{link.c}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              // name={link.id}
                              name={link.id}
                              type="radio"
                              value={"d"}
                              onChange={handleChange}
                              // checked={userAnswers[key] === "d"}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded "
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <p className="text-gray-500">{link.d}</p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <hr className="  bg-gray-200 border-1 dark:bg-gray-700" />
                </div>
              ))}
            </div>

            {/* })} */}
            {/* <hr className=" bg-gray-200 border-1 dark:bg-gray-700" /> */}
            <br />
            <div className="flex  justify-end mx-10 top-52 my-10">
              {/* <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
              </button> */}
              <button
                onClick={handleSubmitQuiz} 
                className={`py-2 px-2 font-medium text-white bg-blue-700 rounded hover:bg-blue-500 transition duration-300 ${buttonDisabled}`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default QuizQuestion;
