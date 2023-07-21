import React, { useState } from 'react'
import axios from 'axios';
import * as qs from 'qs'
// import SendButton from '../assets/sendButton'

const chatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const api= import.meta.env.VITE_APP_BOT_RESPONSE_API;

  const handleSend = async (e) => {
    e.preventDefault();
    const response = await axios.post("asd", qs.stringify({ 'question': input }));
    setMessages([...messages,
    { text: input, isUser: true },
    { text: response.request.response, isUser: false }
    ])
    console.log(response)
    setInput("");
  }

  return (
    <div className="flex flex-col h-full border border-textlight rounded-md bg-bglight">

      {/* chat Response */}
      <div className="basis-5/6">
        {messages?.map((message, index) => {
          return(
          <div key={index} className={message.isUser?"bg-green-500 float-right w-3/4 p-3 mb-2":"bg-bgdark text-lime-300 float-left w-3/4 p-3 mb-2"}>
            {message.text}

          </div>
          )
        })}
        {/* <div className='float-right bg-green-500 text-white'>Hello</div> */}

      </div>

      {/* inputbox */}

      <div className="basis-1/6 items-stretch p-3 border-double border-t-4 border-textdark">
        <form className='flex'>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Please enter your question' className='p-3 min-h-full inline-block align-middle text-textlight bg-bgdark w-full rounded-2xl' />

          {/* <img src="../assets/sendbutton " alt="" className='inline-block align-middle' /> */}
          <button type='submit' className='text-textlight hover:bg-textdark bg-bglight px-4 py-1 mx-3 rounded-lg ' onClick={handleSend}>Send</button>
        </form>
      </div>

    </div >
  )
}

export default chatBox