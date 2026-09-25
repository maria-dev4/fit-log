const Banner = () => {
  return (
    <div className="hero min-h-[calc(100vh-80px)] bg-[#040c1d]">
      <div className="hero-content w-full max-w-5xl flex-col gap-10 px-6 py-16 lg:flex-row-reverse lg:gap-10">
        <div className="w-full lg:w-[46%]">
          <img
            src="/banner.png"
            alt="FitLog workout banner"
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="w-full lg:w-[54%]">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#4AA8FF]">
            WORKOUT LIBRARY
          </p>

          <h1 className="whitespace-nowrap text-4xl font-black leading-tight text-white sm:text-5xl lg:text-5xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="max-w-xl py-6 text-base leading-7 text-gray-300 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1687FF] px-6 py-3 text-sm font-bold tracking-wide text-white transition duration-300 hover:bg-[#3299FF] hover:shadow-[0_8px_25px_rgba(22,135,255,0.25)]">
            BROWSE WORKOUTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
