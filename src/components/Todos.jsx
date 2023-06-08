import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs'

const Todos = () => {
  return (
    <div className="pt-3rem w-[90%] mx-auto">
      <h1 className="text-2 font-medium text-center capitalize">
        Todo List Today</h1>
        {/* 1.todo input */}
        <div>
          <form>
            <div>
              <textarea cols='30' rows='2'>
                <span></span>

              </textarea>
            </div>

          </form>
        </div>
    </div>

   )

}

export default Todos
