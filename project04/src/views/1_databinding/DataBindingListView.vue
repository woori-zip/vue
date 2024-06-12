<template>
  <div class="content-container"> <!-- 최상위 태그가 있어야 함.(필수) -->
    <a href="/" class="goto">Home</a> /
    <a href="../binding" class="goto">Binding</a> /
    <br>
    <h1>5. List 바인딩</h1>
    <hr>
    <div>
      <h3>1. 목록</h3>
      <select name="" id="">
        <option value="">-선택-</option>
        <option v-for="city in cities" :key="city.code" :value="city.code">{{ city.title }}</option>
      </select> <!--반복문이 오면 유일한 값으노 :key 반드시 추가해야함-->
    </div>
    <hr>
    <div>
      <h3>2. 표작성 후 목록 출력</h3>
      <table>
        <thead>
        <tr>
          <th>제품번호</th>
          <th>제품명</th>
          <th>가격</th>
          <th>주문수량</th>
          <th>합계</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="drink in drinkList" :key="drink.drinkId">
          <td>{{ drink.drinkId }}</td>
          <td>{{ drink.drinkName }}</td>
          <td style="text-align: right;">{{ formatCurrency(drink.price) }}</td>
          <!-- <td>{{ drink.qty }}</td> -->
          <td><input type="number" v-model="drink.qty"></td>
          <td style="text-align: right;">{{ formatCurrency(drink.price*drink.qty) }}</td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        { drinkId: '1', drinkName: '코카콜라', price: 700, qty: 1 },
        { drinkId: '2', drinkName: '오렌지주스', price: 1200, qty: 1 },
        { drinkId: '3', drinkName: '커피', price: 500, qty: 1 },
        { drinkId: '4', drinkName: '물', price: 700, qty: 1 },
        { drinkId: '5', drinkName: '보리차', price: 1200, qty: 1 },
        { drinkId: '6', drinkName: '포카리', price: 1000, qty: 1 },
        { drinkId: '7', drinkName: '뽀로로', price: 1300, qty: 1 }
      ]
    }
  },
  methods: {
    formatCurrency (value) {
      return Intl.NumberFormat('ko-KR').format(value) + '원'
    }
  }
}
</script>
