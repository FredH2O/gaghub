const About = () => {
  return (
    <section className="text-center m-10">
      <h2 className="md:text-5xl text-4xl font-bold pb-5">
        🌱 About <span className="text-emerald-500">GagHub</span>
      </h2>

      <div className="md:text-center text-start space-y-3">
        <p className="">
          Welcome to <strong className="italic">GagHub</strong> your friendly
          guide to everything <em>Grow a Garden</em> on Roblox!
        </p>

        <p>
          Here you’ll find information about plants, pets, and more to help you
          enjoy the game and grow your garden with ease.
        </p>

        <p>
          <strong>Note:</strong> GagHub is a{" "}
          <span className="text-pink-500">fan-made project</span>. We are not
          affiliated with Roblox or the creators of <em>Grow a Garden</em>. All
          game content, names, and designs belong to their respective owners.
          This site exists purely for informational purposes — no copyright
          infringement intended.
        </p>

        <p>
          <strong>Our goal is simple:</strong> 🌸 Make information easy to find
        </p>
      </div>
    </section>
  );
};

export default About;
