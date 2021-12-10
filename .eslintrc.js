module.exports = {
  env : {
    browser : true,
    node : true
  },
  extends: [
    // vue : 코드 검사 규칙이 3가지로 나뉜다
    //'plugin:vue/vue3-essential', //Lv1 
    'plugin:vue/vue3-strongly-recommended', //Lv2  
    //'plugin:vue/vue3-recommended', //Lv3 - 엄격
    //js
    'eslint:recommended' // 권장하는 코드 규칙 자바스크립트 문법 검사
  ],
  parserOptions: {
    parser:'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline":["error",{
      "singleline":"never",
      "multiline":"never"
    }],
    "vue/html-self-closing":["error",{
      "html":{
        "void":"always",
        "normal":"never",
        "component":"always" //vue 컴포넌트 /를 붙여 닫는 규칙 
      },
      "svg":"always",
      "math":"always"
    }]
  }
}