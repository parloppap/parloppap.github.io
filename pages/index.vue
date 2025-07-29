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
    <div class="px-3 pb-10">
      <div
        class="bg-gradient-to-b from-red-500 from-50% via-orange-500 via-75% to-yellow-500 relative max-w-screen-lg rounded-xl mx-auto mt-60"
      >
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
        class="bg-gradient-to-b from-green-500 from-50% via-sky-500 via-75% to-blue-500 relative max-w-screen-lg rounded-xl mx-auto mt-60"
      >
        <div
          class="circle bg-green-500 -translate-y-40 top-0 inset-x-0 mx-auto"
        >
          <img
            src="../public/src/images/smile.png"
            alt=""
            class="w-10 mx-auto translate-y-10"
          />

          <h3 class="font-bold text-center text-white mt-14 uppercase">
            work experience
          </h3>
        </div>

        <WorkExperience />
      </div>
    </div>
    <Showcase />
    <GetInTouch />
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

.circle {
  width: 500px;
  height: 300px;
  border-radius: 100% 100% 0 0;

  @include mobile {
    width: 300px;
    height: 300px;
  }
}
</style>
