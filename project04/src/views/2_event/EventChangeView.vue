<template>
  <div class="content-container">
    <a href="/" class="goto">Home</a> /
    <a href="/event" class="goto">Event</a> /
    <h2>2. Change Event</h2><hr>
    <!-- 이벤트 v-on:change -> 축약형 @change -->
    <p v-pre>● 이벤트 : <span class="emp">v-on:change</span> 👉 축약형 : <span class="emp">@change</span></p>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <option value="">도/시</option>
      <option v-for="city in cityList" :key="city.cityCode" :value="city.cityCode">{{ city.title }}</option>
    </select>
    &nbsp;
    <!-- dongList 변수에서 필터링한 값을 저장하고 있는 selectedDongList 출력 -->
    <p v-pre>● dongList 변수에서 <span class="emp">필터링한 값</span>을 저장하고 있는 selectedDongList 출력</p>
    <select name="" id="">
      <option value="">동/읍/면/리</option>
      <option v-for="dong in selectedDongList" :key="dong.dongCode" :value="dong.dongCode">{{ dong.dongTitle }}</option>
    </select>
    <!-- 양방향이기 때문에 change 이벤트를 사용하지 않고도 구현 가능 (단, 가독성이 떨어지므로 비추!) -->
    <p v-pre>● 양방향이기 때문에 change 이벤트를 사용하지 않고도 구현 가능<br>
    <span class="emp">&nbsp;&nbsp;&nbsp;(단, 가독성이 떨어지므로 비추!)</span></p>
    <select name="" id="" v-model="selectedCity2">
      <option value="">도/시</option>
      <option v-for="city in cityList" :key="city.cityCode" :value="city.cityCode">{{ city.title }}</option>
    </select>
    &nbsp;
    <select name="" id="">
      <option value="">동/읍/면/리</option>
      <option v-for="dong in dongList.filter(dong => dong.cityCode === selectedCity2)" :key="dong.dongCode" :valu="dong.dongCode">{{ dong.dongTitle }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCity: '', // 02|051|064 저장
      selectedCity2: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주 1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' }
      ],
      selectedDongList: [] // 해당하는 동만 걸러서 저장. 예) 서울1동~서울4동
    }
  },
  methods: {
    changeCity () {
      // alert('#' + this.selectedCity + '#') // 02|051|064 저장
      // 예) 선택한 selectedCity가 064라면 dongList에서 064만 걸러내서 selectedDongList에 저장
      /*
        화살표 함수 =>
        var sum = function(a,b) {return a+b}
        var sum = (a,b) => {return a + b}

        function (dong) {return dong.cityCode}
        dong => dong.cityCode
      */
      this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
      // alert(this.selectedDongList)
      // console.log(this.selectedDongList)
    }
  }
}
</script>

<style>
</style>
