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
  <div class="bg-[#EDDDD4]">
    <Intro />
    <div class="bg-red-500 relative max-w-screen-lg rounded-xl mx-auto mt-60">
      <div class="circle bg-red-500 -translate-y-40 top-0 inset-x-0 mx-auto">
        <img
          src="../public/src/images/smile.png"
          alt=""
          class="w-10 mx-auto translate-y-10"
        />

        <h3 class="font-bold text-center text-white mt-14 uppercase">
          profile
        </h3>
      </div>

      <AboutMe />
    </div>

    <div
      class="h-screen bg-orange-500 relative max-w-screen-lg rounded-xl mx-auto mt-60"
    >
      <div class="circle bg-orange-500 -translate-y-40 top-0 inset-x-0 mx-auto">
        <img
          src="../public/src/images/smile.png"
          alt=""
          class="w-10 mx-auto translate-y-10"
        />

        <h3 class="font-bold text-center text-white mt-14 uppercase">
          profile
        </h3>
      </div>
    </div>
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
