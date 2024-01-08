import React from 'react'

const Page = () => {

    const data = [
        {img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Raghu Teja",
        profession:"CEO"
        },
        {img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Raghu Teja",
        profession:"CEO"
        },
        {img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Raghu Teja",
        profession:"CEO"
        },
        {img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Raghu Teja",
        profession:"CEO"
        },
        {img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Raghu Teja",
        profession:"CEO"
        },
        {img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Raghu Teja",
        profession:"CEO"
        },
        {img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Raghu Teja",
        profession:"CEO"
        },
    ]

  return (
    <div>
       <div class="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[820px] text-center lg:mb-2">
                <h1 class="text-2xl text-gray-500 font-bold mt-2 text-center">
                    Veri Tech
                  </h1>
                  <div class="lg:flex-grow md:w-2/2 lg:pr-4 md:pr-2 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                    <p class="mb-8 leading-relaxed font-sen text-center text-indigo-600 text-2xl"> Welcome to VeriTech , where a dedicated team of professionals works together to bring innovation, creativity and expertise to sotware industry.get to know the individuals who make our company thrive.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-wrap justify-center">
  {
    
    data.map( (item)=>
    <header >
    <div class="px-2 py-4 mt-16 flex flex-col bg-sky-400 justify-center items-center text-center">
        <img class="inline-flex object-cover border-4 border-indigo-600 dark:border-indigo-400 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 dark:shadow-indigo-700/100 bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 h-24 w-24 !h-48 !w-48" src={item.img} alt="Wendell Adriel" />
        <h1 class="text-2xl text-gray-500 font-bold mt-2">
          {item.name}
        </h1>
        <h2 class="text-base md:text-xl text-gray-500 font-bold">
          {item.profession}
          <a href="#" target="_blank"
            class="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2">
            XYZ
          </a>
        </h2>
       </div>
      </header>
    )
  }  
  </div>

  <div className="grid grid-cols-3 gap-4 md:grid-cols-2">
  {data.map((item, index) => (
    <div key={index} className="px-2 py-4 mt-16 flex flex-col  justify-center items-center text-center">
      {/* Your existing card content */}
      <img className="inline-flex object-cover border-4 border-indigo-600 dark:border-indigo-400 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 dark:shadow-indigo-700/100 bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 h-24 w-24 !h-48 !w-48" src={item.img} alt="Wendell Adriel" />
      <h1 className="text-2xl text-gray-500 font-bold mt-2">
        {item.name}
      </h1>
      <h2 className="text-base md:text-xl text-gray-500 font-bold">
        {item.profession}
        <a href="#" target="_blank" className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2">
          XYZ
        </a>
      </h2>
    </div>
  ))}
</div>

    
    </div>
  )
}

export default Page
