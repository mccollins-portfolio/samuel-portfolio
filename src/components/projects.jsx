import click2earnImg from '../assets/click2earn_dashboard.jpg';

const projects = [
  {
    title: "GossipBuzz",
    url: "https://gossipbuzz.com.ng",
    desc: "A trending gossip blog with a modern UI.",
  },
  {
    title: "HakimiSport",
    url: "https://hakimisport.com.ng",
    desc: "A Nigerian football blog built with speed and SEO in mind.",
  },
  {
    title: "Sportyatch",
    url: "https://sportyatch360.com.ng",
    desc: "A sports highlight blog optimized for mobile users.",
  },
  {
    title: "Click2Earn",
    url: "#",
    desc: "A reward-based ad-clicking platform with referral system and admin panel.",
    image: click2earnImg,
    status: "In development",
  },
];

const Projects = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 text-left"
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 rounded-lg border"
            />
          )}
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-2">{project.desc}</p>
          {project.status && (
            <p className="text-sm italic text-gray-500">{project.status}</p>
          )}
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
