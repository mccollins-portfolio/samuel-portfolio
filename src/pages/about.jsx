const About = () => (
  <section className="max-w-4xl mx-auto p-6 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">About Me</h1>

    <article className="mb-8">
      <h2 className="text-xl font-semibold mb-2">🚀 My Web Development Journey</h2>
      <p>
        I started coding in [2021], and since then I've built everything from blogs to dashboards.
        My passion for solving real-world problems with clean and efficient code led me to become a fullstack developer.
      </p>
    </article>

    <article className="mb-8">
      <h2 className="text-xl font-semibold mb-2">💼 Projects I've Worked On</h2>
      <ul className="list-disc ml-6">
        <li><strong>GossipBuzz</strong> – entertainment news platform</li>
        <li><strong>HakimiSport</strong> – sports highlights & analytics</li>
        <li><strong>Sportyatch360</strong> – live score and match updates</li>
        <li><strong>Click2Eanr</strong> – A reward-based ad-clicking platform with referral system and admin panel.</li>
      </ul>
    </article>

    <article className="mb-8">
      <h2 className="text-xl font-semibold mb-2">🧠 Currently Learning</h2>
      <p>
        I'm improving my React/Next.js skills and exploring backend tools like Node.js and laravel.
      </p>
    </article>

    <article className="mb-8">
      <h2 className="text-xl font-semibold mb-2">🎯 My Goal</h2>
      <p>
        To build web solutions that are not just functional but delightful to use — and help businesses grow through the power of the web.
      </p>
    </article>
  </section>
);

export default About;
