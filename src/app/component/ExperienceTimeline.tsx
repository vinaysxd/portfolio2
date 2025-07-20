'use client';


interface Experiences {
    company: string;
    role: string;
    duration: string;
    description: string;
}
 
import { CheckCircle } from 'lucide-react'; 

export default function ExperienceTimeline(props: { experiences: Experiences[], title:string }) {
  return (
    <section className="w-full px-6 py-16  text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b border-gray-700 pb-2 text-center">{props.title}</h2>

        <div className="relative border-l border-gray-700 pl-6 space-y-12">
          {props.experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Marker */}
              <CheckCircle className="absolute -left-4 top-1 w-6 h-6 text-blue-500 bg-gray-950" />

              {/* Experience Card */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-5 shadow-md">
                <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
                <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
