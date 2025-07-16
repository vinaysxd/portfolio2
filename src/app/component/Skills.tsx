import React from "react";


const Skills = (props: {skills:string[]} ) =>{
    return(
        <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold  mb-8 border-b border-gray-700 pb-2 text-center">Skills</h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 cursor-pointer">
          {props.skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 text-xl rounded-lg border border-gray-700 bg-gray-900 px-16  text-gray-300 hover:bg-blue-600 hover:text-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    )
}

export default Skills;