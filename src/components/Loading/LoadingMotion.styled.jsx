export const show = {
  container: {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  },
};

export const loading = {
  rotate: [0, 0, 180, 180, 0],
  borderRadius: ['0%', '0%', '50%', '50%', '0%'],
  transition: {
    duration: 2,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
  },
};
