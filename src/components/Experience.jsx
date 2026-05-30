import React from "react";

const Experience = () => {
  const courses = [
    {
      title: "The Ultimate React 16 Course",
      instructor: "Jonas Schmedtmann",
      year: "2024",
      duration: "96 hours",
      description:
        "Complete React course covering hooks, context API, Redux, and some projects",
    },
    {
      title: "JavaScript - The Complete Guide",
      instructor: "Jonas Schmedtmann",
      year: "2024",
      duration: "70 hours",
      description:
        "Modern ES6+ JavaScript, asynchronous programming, OOP, and functional programming",
    },
    {
      title: "Understanding TypeScript",
      instructor: "Stephen Grider",
      year: "2025",
      duration: "30+ hours",
      description:
        "Mastering static typing, interfaces, generics, decorators, and advanced TypeScript patterns",
    },
  ];

  return (
    <div
      id="experience"
      className="flex min-h-screen w-full items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative border-l-2 border-blue-400 pl-8 py-4 hover:border-blue-600 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {course.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {course.instructor} | {course.year} | {course.duration}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
              {course.description}
            </p>
            <span className="absolute left-3 top-6 h-2 w-2 rounded-full bg-blue-500 "></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
