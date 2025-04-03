import ResumeSectionTitle from "../../components/layouts/ResumeSectionTitle"
import SkillBar from "./SkillBar";

function Skills({title, icon}) {
  const skills = [
    {
      id: 1,
      title: 'React.js',
      percent: 95,
    },
    {
      id: 2,
      title: 'Tailwind CSS',
      percent: 90,
    },
    {
      id: 3,
      title: 'HTML5',
      percent: 95,
    },
    {
      id: 4,
      title: 'CSS3',
      percent: 80,
    },
    {
      id: 5,
      title: 'JavaScript',
      percent: 90,
    },
    {
      id: 6,
      title: 'Node.js & Express.js',
      percent: 70,
    },
    {
      id: 7,
      title: 'MongoDB',
      percent: 75,
    },
    {
      id: 8,
      title: 'Relational Database (MySQL)',
      percent: 60,
    },
    {
      id: 9,
      title: 'Git & GitHub',
      percent: 90,
    },
    {
      id: 10,
      title: 'API Integration',
      percent: 90,
    }
  ];
  return (
    <div className='bg-[#1e2024] flex flex-col items-start gap-5 rounded-lg p-5'>
      <ResumeSectionTitle title={title} icon={icon} />
      {/* skills */}
      <div className='w-full bg-[#23272b] p-5 rounded-lg shadow-lg flex flex-col gap-3 lg:grid lg:grid-cols-2 gap-x-20'>
        {
          skills.map(skill =>
            <div key={skill.id} className="pb-5 last:pb-0">
              <div className="w-full flex items-center justify-between">
                <span className="text-sm font-medium">{skill.title}</span>
                <span className="text-sm font-medium">{skill.percent}%</span>
              </div>
              {/* skill progress */}
              <SkillBar progress={skill.percent} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Skills