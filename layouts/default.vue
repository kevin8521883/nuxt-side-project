<template>
  <div id="app">
    <Header></Header>
    <Nuxt class="main" />
    <Footer></Footer>
    <!-- <Header class="sticky top-0 z-10"></Header>
    -->
  </div>
</template>
<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex: 1;
}
// #app {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// }
// // // .frontend {
// // //   min-height: 100vh;
// // // }
// .main {
//   flex: 1;
// }
</style>
