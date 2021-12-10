module.exports = {
  presets: ['@babel/preset-env'], // 한번에 지원해주는 패키지
  plugins:[
    ['@babel/plugin-transform-runtime'] // 비동기 처리를 위한 패키지
  ]
}