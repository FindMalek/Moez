export default function Skills() {
  const skills = ["Web Development", "Cloud Computing", "Blockchain"];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Skills</h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
