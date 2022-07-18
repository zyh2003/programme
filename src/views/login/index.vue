<template>
  <div class="login">
    <div class="login-left">欢迎光临</div>
    <div class="login-right">
      <div class="login-content">
        <h1>欢迎回来</h1>
        <p>———账号密码登录———</p>
        <el-form :model="loginForm" :rules="rules" ref="form" class="form">
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-user"
              v-model.trim="loginForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              v-model.trim="loginForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  .login-left {
    width: 70%;
    background-color: #6366f1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 3rem;
  }
  .login-right {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-content {
      width: 250px;
      h1 {
        font-weight: 700;
        font-size: 1.875rem;
        text-align: center;
      }
      p {
        text-align: center;
        color: #e5e7eb;
        margin: 20px 0;
      }
      .login-btn {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>
