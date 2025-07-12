
import { Link } from "react-router-dom";
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
    route: "/click2earn",
    desc: "A reward-based ad-clicking platform with referral system and admin panel.",

  },
];

const Projects = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        project.route ? (
          <Link
            key={index}
            to={project.route}
            className="block bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>
          </Link>
        ) : (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>
          </a>
        )
      ))}
    </div>
  </section>
);

export default Projects;
