"use client"
import React, {useState, useEffect} from "react";
import axios from "axios";
import { emotionConfig } from "../config"
const Aessai = () => {
  const defaultColor = "#cccccc"
    const [rows, setRows]= useState(2);
    const [input, setinput] = useState("");
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState()
    const [color, setColor] = useState(defaultColor)

    const [tagsVisible, setTagsVisible] = useState(false);

    useEffect(() => {
        //
        const inputTimeout = setTimeout(() => {
          runPredictions()
        }, 1000)
    
        return () => clearTimeout(inputTimeout)
      }, [input])

    function handleInputChange(event) {
        setinput(event.target.value)
        // increase the number of rows if required
        const newRows = Math.max(1, Math.ceil(event.target.scrollHeight / 20))
        setRows(newRows)
      }

      async function runPredictions() {
        if (input) {
          setLoading(true)
          setTagsVisible(false)
          // send api call
          const res = await axios.post("api1/emotion", { input: input })
          console.log(res)
          setOutput(res.data.filteredResponse)
          setLoading(false)
        }
      }
      useEffect(() => {
        ///
        handleColor()
        setTagsVisible(true)
      }, [output])
      function handleColor() {
        if (output && output.length > 0) {
          const colorKey = output[0].label
          const colorHex = emotionConfig[colorKey].colorHex
          setColor(colorHex)
        }
      }
    return (
        <>
        <div  style={{ backgroundColor: color + "aa" }} className="transition-all delay-500  flex min-h-screen flex-col items-center p-24">
      
        <textarea
        placeholder="type how you feel .."
       className="w-1/2 min-w-80"
        onChange={handleInputChange}>

        </textarea>
        
       
        <div className="flex flex-wrap items-center justify-center gap-2">
        {output?.map(({ label, score }) => {
  const config = emotionConfig[label];
  if (config) {
    return (
      <span key={label}
        className="transition-all cursor-pointer bg-indigo-100 text-indigo-800 text-lg px-4 py-1 rounded-full border border-indigo-400"
      >
        {config.emoji}
      </span>
    );
  } else {
    // Handle the case when emotionConfig[label] is undefined
    return null;
  }
})}

      </div>
      </div>
     
        </>
    )
}
export default Aessai;