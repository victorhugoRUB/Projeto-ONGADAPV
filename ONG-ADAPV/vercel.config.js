module.exports = {
    routes: [
      {
        src: '/(.*)', // Captura qualquer URL
        dest: '/server.js' // Direciona para o seu arquivo principal
      }
    ]
  };
  