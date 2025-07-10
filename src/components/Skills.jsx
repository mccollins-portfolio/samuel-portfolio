const skills = [
  { title: "Frontend Development", desc: "Crafting modern interfaces with HTML, CSS, JS, React." },
  { title: "Backend Development", desc: "APIs with PHP, Node.js, MySQL." },
  { title: "UI/UX Design", desc: "Designing intuitive flows focused on users." },
  { title: "Deployment & Optimization", desc: "Deploying on cPanel, VPS, Vercel, and optimizing for speed & SEO." },
];

const Skills = () => (
  <section className="py-20 max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold mb-10">My Expertise</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow text-left">
          <h3 className="text-lg font-semibold">{skill.title}</h3>
          <p className="text-gray-600 mt-2">{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Skills;