<template>
  <img alt="Itwill logo" src="./assets/itwill.png">
  <hr>
  <input type="text" id="word">
  <hr>
  <!-- 1) 데이터 바인딩 -->
  <div>
    {{ title }}
  </div>
  <div>
    <h4 style="color: blue;">서초 원룸</h4>
    <p>{{ price1 }}만 원</p>
  </div>
  <div>
    <h4 :style="style1">역삼 원룸</h4> <!-- 속성에 바인딩 -->
    <p>{{ price2 }}만 원</p>
  </div>

  <!-- 2) 데이터 바인딩 -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>10만 원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>10만 원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>10만 원</p>
  </div>

  <!-- 3) 반복문 -->
  <div class="menu">
    <a>Home</a>
    <a>Product</a>
    <a>About</a>
  </div>
  <hr>
  <div class="menu">
    <a v-for="m in 3" :key="m">Home{{ m }}</a>
  </div>
  <hr>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <hr>
  <div class="menu">
    <a v-for="link in links" :key="link.name" :href="link.link">
      <img :src="link.image" .alt="link.name" />
      {{ link.name }}
    </a>
  </div>
  <hr>
  
  <!-- 4) products를 반복문으로 해보기 -->
  <div>
    <div v-for="(p,i) in products" :key="i">
      <h4>{{ p }}</h4>
      <p>10만 원</p>
    </div>
  </div>
  
  <!-- 5) 이벤트 핸들러 -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>10만 원</p>
    <!-- <button v-on:click="함수명">허위매물신고</button> -->
    <button @click="likeCount++">좋아요</button><span> 좋아요 : {{ likeCount }}</span>
  </div>
  <hr>

  <div>
    <h4>{{ products[1] }}</h4>
    <p>10만 원</p>
    <!-- <button v-on:click="함수명">허위매물신고</button> -->
    <button @mousedown="wishCount++">찜</button><span> 찜 : {{ wishCount }}</span>
  </div>

  <!-- 6) 이벤트와 함수 -->
  <div>
    <h4>{{ products[2] }}</h4>
    <p>10만 원</p>
    <!-- <button v-on:click="함수명">허위매물신고</button> -->
    <button @click="increase">찜</button>
    <br>
    <span>찜 : {{ wishCount }}</span>
  </div>
  <hr>

  <!-- 7) 허위매물신고 각각 동작하기 -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>20만 원</p>
    <button @click="lieCounts[0] += 100">허위매물신고</button>
    <span>신고수 : {{ lieCounts[0] }}</span>
  </div>
  <hr>
  <!-- 8) 모달창 만들기 : 조건문 -->
  <div>
    <h4 @click="modalWin = true">{{ products[0] }}</h4>
    <p>30만 원</p>
  </div>

  <div class="black-bg" v-if="modalWin == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="modalWin = false">닫기</button>
    </div>
  </div>
  <h4 v-else>v-else test😑</h4>
  <hr>
</template>

<script>
//기존 JavaScript와 jQuery에서의 데이터 바인딩
//document.getElementById("word").value
//$("#word").val()

export default {
  data(){//데이터보관(변수 등)
    return{
      title : 'hello',
      price1 : 40,
      price2 : 20,
      style1 : 'color:red',
      products : ['신사동 원룸','논현동 원룸','역삼동 원룸'],
      menus : ['HOME','SHOP','ABOUT'],
      links: [
        { name: 'NAVER',  link: 'https://naver.com',  image: './assets/itwill.png'},
        { name: 'GOOGLE', link: 'https://google.com', image: './assets/itwill.png' },
        { name: 'DAUM',   link: 'https://daum.net',   image: './assets/itwill.png' }
      ],
      likeCount : 0,
      wishCount : 0,
      lieCounts : [0 , 0 , 0],
      modalWin : false,
    }
  },
  methods:{
    increase(){
      this.lieCount += 1; //data()에 선언된 변수는 this.변수 접근한다
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color : white;
  padding : 10px;
  text-decoration-line: none;
}

body{
  margin: 0;
}

div{
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
