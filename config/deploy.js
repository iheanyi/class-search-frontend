module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'nd-class-search',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
