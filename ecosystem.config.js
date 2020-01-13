'use strict';

module.exports = {
  deploy: {
    production: {
      user: 'root', // 用户，一般都是填写 root 权限最高
      host: '47.99.134.126', // 服务器 IP 地址，大家可以看看自己的云服务器 IP 地址
      ref: 'origin/master', // 获取代码库的分支，我这边就拉取主分支代码
      repo: 'git@github.com:Nick930826/egg-demo.git', // 仓库地址
      path: '/workspace/egg-demo', // 项目在服务器的存放地址
      'post-deploy': 'git pull && npm install && npm run start', // 在本地运行 pm2 的时候，在项目根目录需要运行的命令行
      env: {
        NODE_ENV: 'production', // 正式环境
      },
    },
  },
};