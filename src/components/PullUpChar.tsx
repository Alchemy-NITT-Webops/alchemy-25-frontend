import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function LettersPullUp({
    text,
    className = '',
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number
}) {
    const splittedText = text.split('');
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: delay + i * 0.03,
            },
        }),
    };

    return (
        <div className={clsx("flex justify-center p-1", className)}>
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={clsx(
                        'text-4xl xs:text-9xl sm:text-5xl md:text-6xl lg:text-8xl font-bold'
                    )}
                >
                    {current === ' ' ? <span>&nbsp;</span> : current}
                </motion.div>
            ))}
        </div>
    );
}
