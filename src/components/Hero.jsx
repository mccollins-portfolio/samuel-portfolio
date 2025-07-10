import profileImg from '../assets/profile.jpg'; // ✅ Correct import for React

const Hero = () => (
  <section className="text-white text-center py-20 relative bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="w-72 h-72 rounded-full bg-white mx-auto mb-6 overflow-hidden shadow-lg">
      <img src={profileImg} alt="Samuel Mccollins" className="w-full h-full object-cover" />
    </div>
    <h1 className="text-4xl font-bold">Hey, I'm <span className="text-white">Samuel Mccollins</span></h1>
    <p className="text-lg text-blue-100 mt-4 max-w-xl mx-auto">
      I'm a <strong>Fullstack Web Developer</strong> & UI/UX designer passionate about building fast, responsive digital products.
    </p>
  </section>
);

export default Hero;
