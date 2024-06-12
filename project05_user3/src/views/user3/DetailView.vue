<template>
  <div>
    <h1>상세보기(DetailView)</h1>
    <p>
      <router-link to="/user3/list" class="btn btn-success">사용자목록</router-link>
    </p>
    <div class="container">
      <table class="table table-condensed">
      <tr>
        <th>
          <label for="name">이름:</label>
        </th>
        <td>
          <input type="text" id="name" name="name" class="form-control" autocomplete="off" v-model="result.name" readonly>
        </td>
      </tr>
      <tr>
        <th>
          <label for="email">이메일:</label>
        </th>
        <td>
          <input type="email" id="email" name="email" class="form-control" autocomplete="off" v-model="result.email" readonly>
        </td>
      </tr>
      <tr>
        <th>
          <label for="pwd">비밀번호:</label>
        </th>
        <td>
          <input type="password" id="pwd" name="pwd" class="form-control" autocomplete="off" v-model="result.pwd" readonly>
        </td>
        </tr>
      <tr>
        <th>
            성별:
        </th>
        <td>
          <input type="radio" id="radio1" name="gender" value="1" v-model="result.gender" disabled>
          <label for="radio1">남성</label>
          &nbsp;&nbsp;&nbsp;
          <input type="radio" id="radio2" name="gender" value="0" v-model="result.gender" disabled>
          <label for="radio2">여성</label>
        </td>
      </tr>
      </table>
    </div>
    <div>
      <button class="btn btn-info">수정</button>
      &nbsp;
      <button class="btn btn-danger" @click="del">삭제</button>
      &nbsp;
      <button class="btn btn-warning" @click="cancel">취소</button>
      &nbsp;
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  created () {
    // 부모페이지(ListView)에서 전달한 값 확인
    // console.log(this.$store)
    // console.log(this.$store.state.user)
    this.result = this.$store.state.user
  },
  data () {
    return {
      result: {}
    }
  },
  methods: {
    cancel () {
      // 다시 목록으로 되돌아 갈때는 특정 사용자 정보를 가져갈 필요가 없음. store 초기화 적용
      this.$store.commit('setUser', {})
      this.$router.push({ name: 'ListView' })
    }, // cancle end
    del () {
      // 삭제할 글 번호
      const params = { no: this.result.no }
      axios
        .post('http://localhost:9095/users/delete', params)
        .then((response) => {
          if (response.data.state) {
            alert(response.data.message)
            this.cancel()
          } else {
            alert(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
          alert('###사용자 삭제 실패')
        })
    }
  }
}
</script>

<style>
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
</style>
