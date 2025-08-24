import DotGrid from "../ReactBits/DotGrid";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full md:h-screen h-[600px] relative">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#111222"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        <div className="absolute w-full px-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl">
            Grow Smarter with{" "}
            <span className="text-emerald-500 font-bold">GAGHub</span>
          </h1>
          <p className="text-xl italic">
            Discover pets, abilities, and tips to level up your Grow A Garden
            adventure!
          </p>
          <div className="space-x-3 flex md:justify-center p-3 w-full">
            <button className="rounded-full text-sm cursor-pointer hover:bg-violet-500 border py-2 px-6">
              Get Started
            </button>
            <button className="rounded-full text-sm cursor-pointer hover:bg-violet-500 border py-2 px-6">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
