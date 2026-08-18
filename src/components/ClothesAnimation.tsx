import { motion } from "motion/react";

export default function ClothesAnimation() {
  const shirtImg = "/src/assets/images/clean_folded_shirt_1787057245627.jpg";
  const suitImg = "/src/assets/images/clean_suit_hanging_1787057257786.jpg";

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden perspective-1000">
      {/* Floating Background Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-200/30 blur-xl"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Spinning Clothes */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Shirt 1 */}
        <motion.div
          className="absolute z-20"
          initial={{ x: -1000, opacity: 0, rotateY: 0 }}
          animate={{
            x: [-1000, 0, 1000],
            opacity: [0, 1, 0],
            rotateY: [0, 360],
            rotateZ: [0, 10, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 0,
          }}
        >
          <img
            src={shirtImg}
            alt="Clean Shirt"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Suit */}
        <motion.div
          className="absolute z-10"
          initial={{ x: 1000, opacity: 0, rotateY: 180 }}
          animate={{
            x: [1000, 0, -1000],
            opacity: [0, 1, 0],
            rotateY: [180, 540],
            rotateZ: [5, -5, 5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        >
          <img
            src={suitImg}
            alt="Clean Suit"
            className="w-56 h-56 md:w-80 md:h-80 object-contain drop-shadow-2xl rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Shirt 2 (Delayed) */}
        <motion.div
          className="absolute z-15"
          initial={{ x: -800, y: 100, opacity: 0, rotateY: 45 }}
          animate={{
            x: [-800, 200, 1200],
            opacity: [0, 1, 0],
            rotateY: [45, 405],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        >
          <img
            src={shirtImg}
            alt="Clean Shirt 2"
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-xl rounded-xl opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
