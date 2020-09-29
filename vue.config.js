const path = require('path'); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

// 模拟数据
const express = require('express')
const app = express()
const home = require('./src/data/home.json')
const apiRoutes = express.Router();
app.use('/api', apiRoutes)

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@commonjs', resolve('./src/commonjs'))
      .set('@components', resolve('./src/components'))
      .set('@content', resolve('./src/components/content'))
      .set('@common', resolve('./src/components/common'))
      .set('@assets', resolve('./src/assets'))
      .set('@network', resolve('./src/network'))
      .set('@views', resolve('./src/views'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  devServer: {
    // 模拟数据
    host: 'localhost',
    port: 8080,
    open: true,
    before(app) {
      app.get('/api/home/multidata', (req, res) => {
        res.json({
          // 这里是你的json内容
          code: 0,
          data: home.multidata.data
        })
      }),
      app.post('/api/home/data', (req, res) => {
        res.json({
          // 这里是你的json内容
          code: 0,
          data: home.data.data.list
        })
      })
    }
  }
}