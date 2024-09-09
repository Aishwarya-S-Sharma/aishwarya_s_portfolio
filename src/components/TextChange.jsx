import React from 'react'
import {useState,useEffect} from 'react'
const TextChange = () => {

    const texts=["Hello, I am Aishwarya S","Hello, I am Aishwarya S","Hello, I am Aishwarya S"]
    const [currentText,setCurrentText]=useState("")
    const [endValue,setEndValue]=useState(true)
    const [isForward,setIsForward]=useState(true)
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        const intervalId=setInterval(()=>{setCurrentText(texts[index].substring(0,endValue))
            if(isForward){
                setEndValue((prev)=>prev+1)
        }else{
            setEndValue((prev)=>prev-1);
        }
    if(endValue>texts[index].length){
        setIsForward(false)
    }else if(endValue<2.1){
        setIsForward(true)
        setIndex((prev)=>prev&texts.length)
    }
},50)

return()=>clearInterval(intervalId)
    },[endValue,isForward,index,texts])

  return (
   <div className='transition ease duration-300'>
    {currentText}
   </div>
  )
}

export default TextChange