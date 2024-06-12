export const getBasePath = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return '/vite/dist/';
    default:
      return '';
  }
};
