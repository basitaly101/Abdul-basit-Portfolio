import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Innovative", "Responsive", "Next-Gen"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space max-w-3xl">
        <motion.h1
          className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m Abdul Basit
        </motion.h1>

        <motion.p
          className="text-2xl text-neutral-200 leading-relaxed mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Turning <span className="text-white font-semibold">ideas</span> into{" "}
          <span className="text-white font-semibold">modern</span> and{" "}
          <span className="text-white font-semibold">scalable</span> web
          interfaces that deliver real impact.
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
          className="mt-8"
        >
          <FlipWords
            words={words}
            className="font-extrabold text-8xl text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]"
          />
        </motion.div>

        <motion.p
          className="text-xl text-neutral-300 mt-8 italic"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Next-Gen Web Development ✨
        </motion.p>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center space-y-6 md:hidden">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m Abdul Basit
        </motion.h1>

        <motion.p
          className="text-xl text-neutral-200 leading-relaxed text-center"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Building impactful and modern web experiences.
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
<FlipWords
  words={words}
  className="font-extrabold text-5xl sm:text-6xl 
             text-green-400 drop-shadow-[0_0_15px_rgba(45,21,191,0.6)]"
/>



        </motion.div>

        <motion.p
          className="text-lg text-neutral-300 italic"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Experiences that inspire 🚀
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
