<script setup>
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
  <div
    class="h-screen bg-gradient-to-b from-[#8F87F1] to-[#FED2E2] flex justify-center items-center overflow-hidden relative"
    :class="{ '!from-[#070F2B] !to-[#9290c3]': isNighttime }"
  >
    <!-- <img
      v-for="item in 10"
      src="../public/src/images/star.png"
      class="cloud absolute cloud-1"
      alt=""
      v-if="isNighttime"
    /> -->

    <img
      v-for="item in 10"
      src="../public/src/images/cloud.png"
      class="cloud absolute cloud-1"
      alt=""
    />

    <div
      class="p-4 border-l-4 border-r-4 border-white rounded-lg text-center text-white"
    >
      <h1 class="title uppercase relative">
        P<span class="lowercase text-[#E9A5F1]">i</span>mpat<span
          class="lowercase text-[#E9A5F1]"
          >i</span
        >pan<span
          class="absolute text-lg sm:text-2xl -top-1 sm:top-0 left-[58.5%] sm:left-[59.7%] star"
          >⭐</span
        >
      </h1>
      <h3 class="title uppercase">Portfolio</h3>
    </div>

    <div class="absolute bottom-5 text-white">
      <h4>↓</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'DynaPuff', system-ui;
}

.cloud {
  top: 0;
  left: 0;
  transition: 0.5s;
  animation: clouds 10s infinite linear;

  &:nth-child(1) {
    animation-duration: 25s;
    margin-left: 10%;
    transform: scale(1.5);
  }

  &:nth-child(2) {
    animation-duration: 30s;
    margin-left: 30%;
    top: 20%;
  }

  &:nth-child(3) {
    animation-duration: 10s;
    margin-left: 50%;
    top: 60%;
    transform: scale(2);
  }

  &:nth-child(4) {
    animation-duration: 15s;
    margin-left: 70%;
    top: 40%;
  }

  &:nth-child(5) {
    animation-duration: 40s;
    margin-left: 90%;
    top: 80%;
    transform: scale(0.5);
  }

  &:nth-child(6) {
    animation-duration: 45s;
    margin-left: 10%;
    top: 10%;
  }

  &:nth-child(7) {
    animation-duration: 50s;
    margin-left: 20%;
    top: 30%;
    transform: scale(0.5);
  }

  &:nth-child(8) {
    animation-duration: 55s;
    margin-left: 40%;
    top: 50%;
  }

  &:nth-child(9) {
    animation-duration: 60s;
    margin-left: 60%;
    top: 70%;
    transform: scale(1.5);
  }

  &:nth-child(10) {
    animation-duration: 20s;
    margin-left: 80%;
    top: 85%;
  }
}

.star {
  animation: rolling 1s infinite linear;
}

@keyframes clouds {
  0% {
    left: -100%;
  }

  100% {
    left: 120%;
  }
}

@keyframes rolling {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
