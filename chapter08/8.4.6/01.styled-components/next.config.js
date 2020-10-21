module.exports = {
  exportPathMap: function() {
    return {
      '/page1': { page: '/page1' },
      '/page2-hello': { page: '/page2', query: { text: 'hello' } },
      '/page2-world': { page: '/page2', query: { text: 'world' } },
    };
  },
};
