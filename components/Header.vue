<template>
  <div class="p-5 shadow-lg flex justify-between bg-white">
    <div>
      <div class="block sm:hidden">
        <font-awesome-icon icon="bars" class="cursor-pointer" @click="showSidebar" />
      </div>
      <div
        v-if="show"
        class="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50 block sm:hidden"
        @click="showSidebar"
      ></div>
      <div
        class="fixed top-0 bottom-0 border bg-white delay sidebar py-5 sm:hidden"
        :class="{ 'left-0': show, '-left-72': !show }"
      >
        <div class="text-right mr-5">
          <font-awesome-icon icon="x" class="cursor-pointer" @click="showSidebar" />
        </div>
        <ul class="">
          <router-link
            class="py-2 px-5 hover:bg-gray-200 delay cursor-pointer block"
            to="/"
            >header</router-link
          >
          <li class="py-2 px-5 hover:bg-gray-200 delay cursor-pointer">page2</li>
          <li class="py-2 px-5 hover:bg-gray-200 delay cursor-pointer">page3</li>
          <li class="py-2 px-5 hover:bg-gray-200 delay cursor-pointer">page4</li>
        </ul>
      </div>
      <ul class="hidden sm:flex">
        <router-link class="mr-3" to="/">header</router-link>
        <li class="mr-3">page2</li>
        <li class="mr-3">page3</li>
        <li class="mr-3">page4</li>
      </ul>
    </div>
    <div class="font-bold cursor-pointer" @click="logout" v-if="jwt">登出</div>
    <div class="font-bold cursor-pointer" @click="loginPage" v-else>登入</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.$store.dispatch("SET_JWT_STATUS", localStorage.getItem("jwt_token"));
    // console.log(localStorage.getItem("jwt_token"));
  },
  methods: {
    showSidebar() {
      this.show = !this.show;
      // console.log(this.show);
    },
    loginPage() {
      this.$router.push("/login");
    },
    logout() {
      localStorage.removeItem("jwt_token");
      this.$store.dispatch("SET_JWT_STATUS", "");
    },
  },
  computed: {
    jwt() {
      return this.$store.state.jwt;
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 288px;
}
</style>
