<template>
  <div class="main-container">
    <div class="main-wrap">
      <header>
        <div class="sel-lang-wrap">
          <select class="lang-select">
            <option>Korean</option>
            <option>English</option>
          </select>
        </div>
        <!-- <div class="logo-wrap">
                      <img src="../../static/logo.png" />
        </div>-->
      </header>
      <section class="user-input-section-wrap">
        <h2>My Page</h2>
        <div class>
          <p class="chk-msg">
            개인 정보 조회를 위해서는 인증이 필요합니다. 비밀번호 입력 후 확인
            버튼을 클릭해 주세요.
          </p>
          <div class="user-input-wrap">
            <input placeholder="Username" type="text" disabled />
          </div>
          <div class="user-input-wrap password-wrap">
            <input placeholder="Password" type="password" />
          </div>
          <div>
            <h6 class="wrong-pw">비밀 번호를 다시 입력해 주세요.</h6>
          </div>
          <div class="user-button-wrap">
            <button>확인</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckPassword',
}
</script>

<style scoped>
@font-face {
  font-family: 'twayfly';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayfly.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'twayfly';
}

body {
  background: #f5f6f7;
}

.main-container {
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-container .main-wrap {
  width: 465px;
  height: 100%;
}

.main-container .main-wrap .sel-lang-wrap .lang-select {
  width: 96px;
  height: 30px;
  color: #4e4e4e;
  border: solid 1px #dadada;
}

.main-container .main-wrap header .sel-lang-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;
}

/* user input 대분류 CSS */

.user-input-section-wrap {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* input type password 깨짐 현상 해결 */
.password-wrap .input[type='password'] {
  font-family: sans-serif;
}

/* .password-wrap .input[type='password']::placeholder {
  font-family: 'twayfly';
} */

/* check msg */
.chk-msg {
  width: 465px;
  margin-bottom: 2%;
}

.user-input-section-wrap h2 {
  margin-bottom: 60px;
}

.user-input-wrap {
  width: 465px;
  height: 55px;
  border: solid 1px #dadada;
  border-radius: 10px;
  /* padding: 10px; */
}

.password-wrap {
  margin-top: 13px;
}

.user-input-wrap input {
  border: none;
  width: 465px;
  /* margin-top: 10px; */
  font-size: 20px;
  /* margin-left: 10px; */
  padding: 10px;
  border: solid 1px #dadada;
  height: 55px;
  border-radius: 10px;
}

/* wrong-pw CSS*/
.wrong-pw {
  font-size: smaller;
  margin: 10px;
  /* justify-content: start;
  안먹는다,,, ㅠ3ㅠ  */
}

.user-button-wrap {
  padding-top: 13px;
}

.user-button-wrap button {
  width: 465px;
  height: 48px;
  font-size: 20px;
  background: #206e95;
  color: white;
  border: solid 1px #88c0c5;
  border-radius: 10px;
}
</style>
