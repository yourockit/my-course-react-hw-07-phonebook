export const show = {
  container: {
    hidden: {
      height: 0,
      transition: {
        duration: 0.2,
        when: 'afterChildren',
      },
    },
    show: {
      height: 'auto',
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
      },
    },
  },

  item: {
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
