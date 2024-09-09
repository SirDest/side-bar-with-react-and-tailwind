import React, { useState } from "react";
import { MoreVertical, ChevronFirst, ChevronLast } from "lucide-react";

const SideBar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className='h-screen w-fit'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <img
            src='https://img.logoipsum.com/243.svg'
            alt=''
            className='w-32'
          />
          <button
            onClick={() => setExpanded((state) => !state)}
            className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className='flex-1 px-3'>{children}</ul>

        <div className='border-t flex p-3'>
          <img
            src='https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true'
            alt=''
            className='w-10 h-10 rounded-md'
          />
          <div className={`flex justify-between items-center w-52 ml-3`}>
            <div className='leading-4'>
              <h4 className='font-semibold'>Akinro Dest</h4>
              <span className='text-xs text-gray-600'>
                akinro.destined@gmail.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
