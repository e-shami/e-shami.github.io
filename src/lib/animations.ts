export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring' as const, stiffness: 200 }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'tween' as const, stiffness: 200, duration: 0.6 }
    }
};

export const scaleIn = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring' as const, stiffness: 200, delay: 0.2 }
    }
};

export const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring' as const, stiffness: 100 }
    }
};

export const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring' as const, stiffness: 100 }
    }
};