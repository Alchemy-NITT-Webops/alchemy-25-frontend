import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
import clsx from 'clsx';

export function GradualSpacing({
    text = '',
    className = '',
}: {
    text: string,
    className?: string
}) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-wrap space-x-1 justify-center px-4 md:px-0">
            <AnimatePresence>
                {text.split('').map((char, i) => (
                    <motion.p
                        ref={ref}
                        key={i}
                        initial={{ opacity: 0, x: -18 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        exit="hidden"
                        transition={{ duration: 0.7, delay: 1 + i * 0.05 }}
                        className={clsx(
                            'text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center font-IBMPlexSans tracking-tighter',
                            className
                        )}
                    >
                        {char === ' ' ? <span>&nbsp;</span> : char}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
}