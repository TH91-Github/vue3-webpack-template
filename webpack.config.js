// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader') 

//export 
module.exports ={
  resolve: { 
    extensions: ['.js', '.vue'],  // 해당 파일 확장자를 입력하지 않아도 오류 나지 않게 돕는다
    alias: {   // 경로 별칭
      '~': path.resolve(__dirname,'src'), // 경로 지칭
      'assets': path.resolve(__dirname,'src/assets') // 실제 이미지가 있는 경로
    }
  },
  // 파일을 일어들이기 위한 시작 진입점 설정
  entry: './src/main.js',
  
  // 결과물(번동)을 반환
  output: {
    //path: path.resolve(__dirname, 'dist'),  //기본 dist
    //filename: 'main.js',  // 기본적으로 entry과 동일한 주소
    clean: true
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use:'vue-loader'
      },
      {
        test: /\.s?css$/, // ?를 붙여 scss 가 없을수도 있기에 없다면 css롤 끝나는 파일을 찾는다
        use:[
          //순서 중요!
          'vue-style-loader', // 뷰 파일에서 스타일 태그를 해석해서 동작할 수 있게 만드는 웹팩 로더
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test : /\.js$/, 
        exclude: / node_modules/, // 제외할 경로
        use:[
          'babel-loader'
        ]
      },
      {
        test : /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      } 
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins:[
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns:[
        {
          from:'static' // 복사할 내용
        }
      ]
    }),
    new VueLoaderPlugin()
  ],
  devServer:{
    host:'localhost'
  }
}