import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2s">
        <Image
          src="/favicon.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 pt-4">
          Find your destinations with Pass
          <span className="text-[#2563EB]">port</span>!
        </h1>
        <p className="regular-20 mt-6 text-gray-30 xl:max-w-[520px]">
          Discover hidden gems, explore vibrant cultures, and find the perfect
          accommodations with Passport. Plan your dream vacation easily. Let
          Passport be your passport to the world.
        </p>
      </div>
    </section>
  );
};

export default Hero;
