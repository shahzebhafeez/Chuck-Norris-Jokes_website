import React, { useContext, useState, useMemo } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Cards from "./components/Card";
import Box from "@mui/material/Box";
import "./App.css";
import { CategoryContext } from "./Context/Context";
import { motion } from "framer-motion";
import { LampDemo } from "./components/WavyBackground";
import { TypewriterEffect } from "./components/Sparkles";

const App = () => {
  const [Jokes, setJokes] = useState([]);
  const { category } = useContext(CategoryContext);
  const words = [
    { text: `${category}`, className: "text-red-500 text-md" },
    { text: "jokes", className: "text-blue-500 text-md" },
  ];

  const cursorClassName = "bg-green-500";

  const fetchData = async (category) => {
    const options = {
      method: "GET",
      url: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search",
      params: { query: `${category}` },
      headers: {
        accept: "application/json",
        "X-RapidAPI-Key": "10c2e68073mshb312f50d80392a0p117b5bjsn0c39dec2d253",
        "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      const JokesArray = response.data.result;
      console.log(response.data.result);

      setJokes((prevJokes) => JokesArray);
    } catch (error) {
      console.error(error);
    }
  };
  const memoizedJokes = useMemo(() => Jokes, [Jokes]);
  let ArrayLenght = memoizedJokes.length;

  return (
    <>
      <div className="m-0  bg-slate-950">
        <Navbar fetchAction={fetchData} />
        <LampDemo />

        <TypewriterEffect words={words} cursorClassName={cursorClassName} />

        <div className="flex flex-col justify-center text-center">
          <div className="mt-[5vh] flex justify-center items-start  w-full ">
            <Box sx={{ "& button": { m: 1 } }}>
              <div></div>
            </Box>
          </div>

          <div className="flex flex-wrap justify-center gap-[1rem]  ">
            {memoizedJokes.map((joke, index) => {
              return (
                <>
                  <motion.div
                    key={ArrayLenght}
                    initial={{ x: -150, y: -150, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,

                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <Cards
                      key={index}
                      content={joke.value}
                      dateCreated={joke.created_at}
                    />
                  </motion.div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
