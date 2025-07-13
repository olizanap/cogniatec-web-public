const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      logLevel: 'debug',
      onError: (err, req, res) => {
        console.error('❌ Error del proxy:', err.message);
        res.writeHead(500, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify({ 
          success: false, 
          message: 'Error de conexión con el servidor backend',
          error: err.message 
        }));
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log('📤 Proxy request:', req.method, req.url);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log('📥 Proxy response:', proxyRes.statusCode, req.url);
      }
    })
  );
}; 