<template>
  <div>
    <!-- ListView.vue -->
    <h1>사용자 목록 (ListView)</h1>
    <P>
      <button class="btn btn-danger" @click="getData">AXIOS 모듈 테스트</button>
      &nbsp;
      <router-link to="/user3/create" class="btn btn-success">사용자 추가</router-link>
    </P>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr class="info text-center">
            <th>name</th>
            <th>gender</th>
            <th>email</th>
            <th>regdate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in result" :key="row.no" v-on:click="$event => detail(row)">
            <td>{{ row.name }}</td>
            <td>{{ row.gender == 0 ? 'M' : 'F' }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.regdate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 주의사항) axios를 import하고 사용하지 않으면 에러발생
// 'axios' is defined but never used
import axios from 'axios'
import store from '@/store'
export default {
  name: 'ListView',
  created () { // ListView가 생성됐을 때
    this.getList()
  },
  data () {
    return {
      result: []
    }
  },
  methods: {
    getData () {
      // alert()
      axios
        .get('http://localhost:9095/test')
        .then((response) => {
          console.log(response) // "AXIOS 모듈 테스트 성공!!"
        })
        .catch((error) => {
          console.log(error)
        })
    }, // getData() end
    getList () {
      // alert('getList 함수 호출')
      axios
        .get('http://localhost:9095/user3/list')
        .then((response) => {
          // console.log('response Data 확인 : ' + response)
          this.result = response.data.result
          // console.log('Result 확인 : ' + response)
        })
        .catch((error) => {
          console.log('리스트 호출 중 오류 발생 : ' + error)
        })
    }, // getList() end
    detail (row) {
      // console.log(row)

      // 1) 전달값이 없을 때
      // this.$router.push({ name: 'DetailView' })

      // 2) 전달값이 그래도 노출됨
      // http://localhost:8080/user3/detail?no=1&name=오필승&email=korea@example.com&pwd=1234&gender=1&del=1&regdate=2024-06-10+10:47:13
      // this.$router.push({ name: 'DetailView', query: row })

      // 3) /router/index.js 파일에서 path: 'users/detail/:name/:email/:pwd' 정의해야 됨
      // params -? http://localhost:8080/user3/detail/손흥민/sonny@korea.com/8888
      // this.$router.push({ name: 'DetailView', params: row })

      // 2) 과 3) 둘 다 URL에 정보가 그대로 노출되기 때문에,
      // store 기능을 이용해서 데이터를 전달함
      // store 기능을 사용하기 위해 vuex 를 설치해야 함. package.json에서 vuex 모듈이 설치되어 있는지 확인하고,
      // 없으면 추가 설치 -> npm install vuex

      // /store/index.js 에서 함수를 작성하고 사용하면 됨
      // store.commit('setUser', row)
      store.commit('setUser', row)
      this.$router.push({ name: 'DetailView' })
    } // detail end
  }
}
</script>

<style>
.text-center th{
  text-align: center;
}
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
</style>
