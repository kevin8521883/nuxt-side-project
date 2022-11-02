<template>
  <div class="flex items-center justify-center dark:bg-gray-900 delay">
    <div class="w-full sm:w-1/2 lg:w-1/3 text-center p-5">
      <!-- <p class="text-3xl font-bold mb-5 dark:text-white delay">股勢大師</p> -->
      <div class="border shadow-lg p-5 flex flex-col items-center">
        <p class="font-bold text-2xl dark:text-white delay">登入您的帳號</p>
        <div class="w-4/5 border-b text-left my-5 flex items-center">
          <font-awesome-icon icon="user" size="sm" class="mr-2 dark:text-white delay" />
          <input
            class="w-full border-0 focus:ring-0 py-1 pl-0 pr-2 dark:bg-gray-900 delay dark:text-white delay"
            type="text"
            placeholder="帳號"
            v-model="account"
          />
        </div>
        <div class="w-4/5 border-b text-left my-5 flex items-center">
          <font-awesome-icon icon="lock" size="sm" class="mr-2 dark:text-white delay" />
          <input
            class="w-full border-0 focus:ring-0 py-1 pl-0 pr-2 dark:text-white delay dark:bg-gray-900 delay"
            type="password"
            placeholder="密碼"
            v-model="password"
          />
        </div>

        <div
          @click="login"
          class="my-5 py-3 px-5 text-white text-sm rounded-full bg-blue-500 hover:bg-blue-600 mx-auto items-center justify-center shadow-lg cursor-pointer whitespace-nowrap w-4/5"
        >
          <p class="text-center font-bold">登入</p>
        </div>
        <div class="text-sm font-bold w-3/4 text-gray-400">或是</div>
        <button
          class="my-5 py-3 px-5 text-white text-sm text-center rounded-full bg-fb mx-auto flex items-center justify-center shadow-lg cursor-pointer whitespace-nowrap w-4/5"
        >
          <font-awesome-icon :icon="['fab', 'square-facebook']" class="text-lg mr-3" />
          <p class="text-center font-bold">以FACEBOOK來登入</p>
        </button>
        <p class="text-red-500 font-bold text-sm" v-if="err_msg">
          {{ err_msg }}
        </p>
      </div>
      <div class="mt-5">
        <span class="text-sm font-bold">還沒有帳號嗎？</span>
        <router-link
          to="/register"
          class="text-blue-600 hover:text-blue-400 font-bold text-sm"
          >註冊帳號</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      err_msg: "",
    };
  },
  created() {
    if (this.jwt) {
      this.$router.push("/");
      console.log(123);
    } else {
      console.log(456);
    }
  },
  computed: {
    jwt() {
      return this.$store.state.jwt;
    },
  },
  methods: {
    login() {
      if (!this.account || !this.password) {
        this.err_msg = "帳號密碼不得為空";
        return;
      }
      this.err_msg = "";
      let data = {
        account: this.account,
        password: this.password,
      };
      this.$axios.post("http://localhost:3366/login", data).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          localStorage.setItem("jwt_token", res.data.token);
          this.$store.dispatch("SET_JWT_STATUS", localStorage.getItem("jwt_token"));
          this.$router.push("/");
        } else {
          this.err_msg = res.data.msg;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-fb {
  background: #4c69ba linear-gradient(#4c69ba, #3b55a0);
}
</style>
