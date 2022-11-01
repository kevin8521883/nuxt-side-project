<template>
  <div class="flex items-center justify-center dark:bg-gray-900 delay">
    <div class="w-full sm:w-1/2 lg:w-1/3 text-center p-5">
      <!-- <p class="text-3xl font-bold mb-5 dark:text-white delay">股勢大師</p> -->
      <div class="border shadow-lg p-5 flex flex-col items-center">
        <p class="font-bold text-2xl dark:text-white delay">建立您的帳號</p>
        <div class="w-4/5 border-b text-left my-5 flex items-center">
          <font-awesome-icon icon="user" size="sm" class="mr-2 dark:text-white delay" />
          <input
            class="w-full border-0 focus:ring-0 py-1 pl-0 pr-2 dark:bg-gray-900 delay dark:text-white delay"
            type="text"
            placeholder="帳號"
            v-model="account"
          />
        </div>
        <div class="w-4/5 text-left my-5 flex items-center">
          <div class="border-b flex items-center mr-3">
            <font-awesome-icon icon="lock" size="sm" class="mr-2 dark:text-white delay" />
            <input
              class="w-full border-0 focus:ring-0 py-1 pl-0 pr-2 dark:text-white delay dark:bg-gray-900 delay"
              type="password"
              placeholder="密碼"
              v-model="password"
            />
          </div>
          <div class="border-b flex items-center">
            <font-awesome-icon icon="lock" size="sm" class="mr-2 dark:text-white delay" />
            <input
              class="w-full border-0 focus:ring-0 py-1 pl-0 pr-2 dark:text-white delay dark:bg-gray-900 delay"
              type="password"
              placeholder="確認密碼"
              v-model="confirm_password"
            />
          </div>
        </div>
        <div class="w-4/5 border-b text-left my-5 flex items-center">
          <font-awesome-icon
            icon="envelope"
            size="sm"
            class="mr-2 dark:text-white delay"
          />
          <input
            class="w-full border-0 focus:ring-0 py-1 pl-0 pr-2 dark:text-white delay dark:bg-gray-900 delay"
            type="email"
            placeholder="信箱"
            v-model="email"
          />
        </div>
        <div class="w-4/5 border-b text-left my-5 flex items-center">
          <font-awesome-icon icon="phone" size="sm" class="mr-2 dark:text-white delay" />
          <input
            class="w-full border-0 focus:ring-0 py-1 pl-0 pr-2 dark:text-white delay dark:bg-gray-900 delay"
            type="tel"
            placeholder="電話"
            v-model="phone"
          />
        </div>
        <p class="text-red-500 font-bold text-sm" v-if="err_msg">
          {{ err_msg }}
        </p>
        <div
          class="my-5 py-3 px-5 text-white text-sm rounded-full bg-blue-500 hover:bg-blue-600 mx-auto items-center justify-center shadow-lg cursor-pointer whitespace-nowrap w-4/5"
        >
          <p class="text-center font-bold" @click="createAccount">註冊</p>
        </div>
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
      confirm_password: "",
      email: "",
      phone: "",
      err_msg: "",
    };
  },
  methods: {
    createAccount() {
      if (this.password != this.confirm_password) {
        this.err_msg = "密碼確認錯誤";
        return;
      }
      this.err_msg = "";
      let data = {
        account: this.account,
        password: this.password,
        email: this.email,
        phone: this.phone,
      };
      this.$axios.post("http://localhost:3366/createAccount", data).then((res) => {
        console.log(res.data);
        if (res.data.status) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
