<template>
  <div class="p-5">
    <div class="text-red-500 font-bold cursor-pointer" @click="getEmployee">123</div>
    <div class="mb-3">
      <label for="id">ID</label>
      <input type="text" class="border" v-model="client_id" />
    </div>
    <div class="mb-3">
      <label for="id">name</label>
      <input type="text" class="border" v-model="client_name" />
    </div>
    <div class="mb-3">
      <label for="id">phone</label>
      <input type="tel" class="border" v-model="phone" />
    </div>
    <button class="p-2 border" @click="postClient">送出</button>
    <button class="p-2 border" @click="updateClient">更新</button>
    <button class="p-2 border" @click="selectClient">搜尋</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      client_id: "",
      client_name: "",
      phone: "",
    };
  },
  created() {},
  methods: {
    getEmployee() {
      let data = {
        birth_date: 10,
      };
      this.$axios.post("http://localhost:3366/getEmployee", data).then((res) => {
        console.log(res.data);
      });
    },
    postClient() {
      let data = {
        client_id: this.client_id,
        client_name: this.client_name,
        phone: this.phone,
      };
      this.$axios.post("http://localhost:3366/postClient", data).then((res) => {
        console.log(res.data);
      });
    },
    updateClient() {
      let data = {
        client_id: this.client_id,
        client_name: this.client_name,
      };
      this.$axios.post("http://localhost:3366/updateClient", data).then((res) => {
        console.log(res.data);
      });
    },
    selectClient() {
      let data = {
        client_id: this.client_id,
      };
      this.$axios.post("http://localhost:3366/selectClient", data).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
