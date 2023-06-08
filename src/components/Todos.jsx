import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { BsPlusSquareFill} from "react-icons/bs";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const Todos = () => {
  const [showEmoji, setShowEmoji] = useState(false);


  return (
    <div className="pt-3rem w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] mx-auto">
      <h1 className="text-2 font-medium text-center capitalize">
        Todo List Today
      </h1>
      {/* 1.todo input */}
      <div>
        <form className='flex items-start gap-2 pt-2rem'>
          <div className='w-full flex-items-end p-2 bg-todo rounded relative'>
            <textarea
            placeholder="Add your Todo"
            className="w-full bg-transparent outline-none resize-none text-sm"

            cols="30"
            rows="2"
            ></textarea>
            <span className='cursor-pointer hover:text-slate-300'
            onClick={()=> setShowEmoji(!showEmoji)}

            >
              <BsEmojiSmile />
            </span>

          {showEmoji && <div className='absolute top-[100%] right-2'>
            <Picker
            data = {data}
            emojiSize={20}
            emojiButtonSize={30}
            omEmojiSelect={console.log}
            maxFrequentRows={0}

            />
             </div>}
          </div>



          <button className='flex items-center capitalize gap-2
          bg-green-100 text-black py-1.5 px-3 rounded-sm hover:bg-blue-200'>
            < BsPlusSquareFill/>Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todos;
