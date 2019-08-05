// 服务器代理
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('/api', { 
       target: 'https://www.easy-mock.com' ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
       // cookieDomainRewrite: "http://localhost:3000"
    }));
};