"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.split('\n').map((line, lineIdx) => (
          <div key={`line-${lineIdx}`}>
            {line.split(' ').map((word, wordIdx) => (
              <motion.span
                key={`word-${lineIdx}-${wordIdx}`}
                className="text-slate-300 text-sm md:text-xl opacity-0"
              >
                {word}{' '}
              </motion.span>
            ))}
            <br />
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white text-center p-4 text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
