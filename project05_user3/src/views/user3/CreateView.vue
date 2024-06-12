<template>
  <div>
    <h1>사용자 추가 (CreateView)</h1>
    <p>
      <router-link to="/user3/list" class="btn btn-default">사용자 목록</router-link>
    </p>
    <div class="container">
      <table class="table table-condensed">
      <tr>
        <th>
          <label for="name">이름:</label>
        </th>
        <td>
          <input type="text" id="name" name="name" placeholder="이름 입력하세요" class="form-control" autocomplete="off" v-model="result.name" :class="{active:active.name}">
        </td>
      </tr>
      <tr>
        <th>
          <label for="email">이메일:</label>
        </th>
        <td>
          <input type="email" id="email" name="email" placeholder="이메일 입력하세요" class="form-control" autocomplete="off" v-model="result.email" :class="{active:active.emal}">
        </td>
      </tr>
      <tr>
        <th>
          <label for="pwd">비밀번호:</label>
        </th>
        <td>
          <input type="password" id="pwd" name="pwd" placeholder="비밀번호 입력하세요" class="form-control" autocomplete="off" v-model="result.pwd" :class="{active:active.pwd}">
        </td>
        </tr>
      <tr>
        <th>
            성별:
        </th>
        <td>
          <input type="radio" id="radio1" name="gender" value="1" v-model="result.gender" :class="{active:active.gender}">
          <label for="radio1">남성</label>
          &nbsp;&nbsp;&nbsp;
          <input type="radio" id="radio2" name="gender" value="0" v-model="result.gender" :class="{active:active.gender}">
          <label for="radio2">여성</label>
        </td>
      </tr>
      </table>
    </div>
    <div>
      <button class="btn btn-warning" @click="save">생성</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateView',
  data () {
    return {
      result: { name: '', email: '', pwd: '', gender: '' },
      active: { name: false, email: false, pwd: false }
    }
  },
  methods: {
    save () {
      // alert('save 함수 호출')
      // 유효성 검사
      // console.log(this.result)
      if (this.result.name === '') {
        alert('이름 입력 바람')
        this.active.name = true
        return false
      } else {
        this.active.name = false
      }// if end

      if (this.result.email === '') {
        alert('이메일 입력 바람')
        this.active.email = true
        return false
      } else {
        this.active.email = false
      }// if end

      if (this.result.pwd === '') {
        alert('비밀번호 입력 바람')
        this.active.pwd = true
        return false
      } else {
        this.active.pwd = false
      }// if end

      if (this.result.gender === '') {
        alert('성별 선택 바람')
        this.active.gender = true
        return false
      } else {
        this.active.gender = false
      }// if end

      // console.log(this.result)

      axios
        .post('http://localhost:9095/user3/save', this.result)
        .then((response) => {
          console.log(response)
          // alert('사용자 등록 완료')
          alert(response.data.message)
          this.$router.push({ name: 'ListView' })
        })
        .catch((error) => {
          console.log(error)
        })
    }// save() end
  }
}
</script>

<style>
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
</style>
