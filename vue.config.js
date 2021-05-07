const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@', resolve('src'))
    // .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    // .set('')
    // .set('components',resolve('components/tabbar'))
    //set第一个参数：设置的别名，第二个参数：设置的路径　　　　
  }
}