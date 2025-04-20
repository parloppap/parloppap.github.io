<script setup>
const isLoading = ref(true);
const isNighttime = ref(false);

const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;
if (isDayTime === true) {
  isNighttime.value = false;
} else {
  isNighttime.value = true;
}
</script>

<template>
  <Loading />
  <Intro />
  <div class="content" :class="{ 'content-night': isNighttime }">
    <AboutMe />
    <Showcase />
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

.content-night {
  background: linear-gradient(
    180deg,
    #9290c3 0%,
    #535c91 25%,
    #1b1a55 50%,
    #070f2b 75%
  ) !important;
}
</style>
