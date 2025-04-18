<script setup>
const isLoading = ref(true);
</script>

<template>
  <Loading />
  <Intro />
  <div class="content">
    <div class="h-screen" v-for="item in 4"></div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  background: linear-gradient(
    180deg,
    #fed2e2 0%,
    #e9a5f1 25%,
    #c68efd 50%,
    #8f87f1 75%
  );
}
</style>
