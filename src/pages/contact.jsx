const Contact = () => (
  <section className="p-10 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <form
      action="https://formspree.io/f/mrbkwnvq"  // <-- replace this
      method="POST"
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="w-full p-3 border rounded"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </section>
);
export default Contact;
