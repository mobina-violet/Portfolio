import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiTypescript,
  SiGithub,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: SiReact, level: 70, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, level: 60, color: "#F7DF1E" },
    { name: "TailwindCss", icon: SiTailwindcss, level: 80, color: "#06B6D4" },
    { name: "Git", icon: SiGit, level: 40, color: "#F05032" },
    { name: "TypeScript", icon: SiTypescript, level: 40, color: "#3178C6" },
    { name: "GitHub", icon: SiGithub, level: 50, color: "#181717" },
    { name: "Html5", icon: SiHtml5, level: 90, color: "#DD4B25" },
    { name: "Css3", icon: SiCss3, level: 80, color: "#146EB0" },
  ];

  return (
    <div
      id="skill"
      className="min-h-screen w-full py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-4xl font-semibold text-gray-800 justify-center flex mb-8">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg transition-all hover:shadow-2xl">
              <div className="flex flex-col items-center gap-4">
                <skill.icon
                  className="h-16 w-16 transition-transform group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="h-2.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}></div>
                </div>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
