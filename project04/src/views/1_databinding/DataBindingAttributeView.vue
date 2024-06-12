<template>
  <div class="content-container">
    <a href="/" class="goto">Home</a> /
    <a href="../binding" class="goto">Binding</a> /
    <br>
    <h1>4. Attribute 바인딩</h1>
    <hr>
    <h3>1. value 속성 접근</h3>
    <p>1) value 속성에 단방향 데이터를 바인딩할 수 있다</p>
    <input type="text" v-bind:value="userId"> {{ userId }}
    <br>
    <p>2) v-bind를 생략할 수 있다</p>
    <input type="text" :value="userId"> {{ userId }}
    <br>
    <p>3) v-model이면 양방향이 될 수 있다</p>
    <input type="text" v-model="userId2"> {{ userId2 }}

    <h3>2. src 속성 바인딩</h3>
    <img :src="imgSrc" alt="망그러진곰">

    <h3>3. disabled 속성 바인딩</h3>
    <input type="search" v-model="keyWord">
    <button class="s-btn" :disabled="keyWord===''">조회</button>

    <h3>4. style 속성 바인딩</h3>
    <div style="color: red; font-size: 20px;">
      스타일 바인딩: 글씨는 red, 폰트크기: 20px
    </div>
    <div :style="txt">
      스타일 바인딩: 글씨는 green, 폰트크기: 30px
    </div>
    <br>
    <button @click="txt.color='blue'">색상바꾸기</button>

    <h3>5. class 속성 바인딩</h3>
    <p>● 다른 속성의 바인딩 방식과는 조금 다르다</p>
    <div style="color:red">1) style="color:red"</div>
    <div class="text-red">2) class="text-red"</div>
    <p>※ 선택자명이 두 개의 단어(text-red)로 구성되어 있으면, ' 기호 생략 시 <span class="emp">에러</span></p>
    <div :class="{'text-red':true}">3) :class="{'text-red':true}"</div>
    <div :class="{'text-red':false}">4) :class="{'text-red':false}"</div>

    <div :class="{'text-red':true, active:false}">5) :class="{'text-red':true, active:false}"</div>
    <div :class="{'text-red':false, active:true}">6) :class="{'text-red':false, active:true}"</div>
    <p>● 변수로 대체 가능</p>
    <div :class="{'text-red':isText, active:isActive}">
      7) :class="{'text-red':isText, active:isActive}" -- (isText: true, isActive: false)
    </div>
    <p>● class를 배열로 저장 후 적용(실무에서 자주 사용하지 않음)</p>
    <div :class="txt2">8) :class="txt2" -- (txt2: ['text-red', 'active'])</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: 'KOREA',
      userId2: 'SEOUL',
      imgSrc: 'https://item.kakaocdn.net/do/b563e153db82fde06e1423472ccf192c82f3bd8c9735553d03f6f982e10ebe70',
      keyWord: '',
      txt: { color: 'green', fontsize: '30px' },
      isText: true,
      isActive: false,
      txt2: ['text-red', 'active']
    }
  }
}
</script>

<style scoped>
.text-red{
  color:red;
}
.active{
  background-color: greenyellow;
  font-weight: bold;
}
.s-btn{
  margin:10px;
}
</style>
