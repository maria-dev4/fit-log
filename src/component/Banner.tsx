const Banner = () => {
  return (
    <div className="hero min-h-[calc(100vh-80px)] bg-[#020B1C]">
      <div className="hero-content w-full max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row-reverse lg:justify-between lg:gap-16">
        <div className="w-full lg:w-1/2">
          <img
            src="/banner.png"
            alt="FitLog workout banner"
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#4AA8FF]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="max-w-xl py-6 text-base leading-7 text-gray-300 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="btn border-none bg-[#1687FF] text-white hover:bg-[#3299FF]"
          >
            BROWSE WORKOUTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
