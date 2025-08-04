<script setup lang="ts">
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 1000,
  },
});

onMounted(() => {
  // console.log(swiper.instance);
});
</script>

<template>
  <div class="min-h-screen py-5 sm:py-30 text-secondary">
    <div class="flex justify-center">
      <h1 class="title showcase-text uppercase">Ac</h1>
      <h1 class="title showcase-text uppercase">ti</h1>
      <h1 class="title showcase-text uppercase">vi</h1>
      <h1 class="title showcase-text uppercase">ti</h1>
      <h1 class="title showcase-text uppercase">es</h1>
    </div>

    <img
      src="../public/src/images/smile-line.svg"
      class="mx-auto w-3/4 sm:w-1/5 mb-15"
      alt=""
    />

    <div
      class="flex flex-col lg:flex-row gap-5 max-w-screen-lg mx-auto justify-center items-center px-3"
    >
      <div class="relative basis-1/3">
        <img src="../public/src/images/iphone-layout.svg" alt="" />
        <div class="absolute inset-0 flex max-w-[270px] h-fit m-auto">
          <ClientOnly>
            <swiper-container
              ref="containerRef"
              class="max-w-[270px]"
              slides-per-view="1"
              :init="false"
            >
              <swiper-slide>
                <img src="../public/src/images/datacon-3.jpg" alt=""
              /></swiper-slide>
              <swiper-slide>
                <img src="../public/src/images/datacon-4.jpg" alt=""
              /></swiper-slide>
              <swiper-slide>
                <img src="../public/src/images/datacon-5.jpg" alt=""
              /></swiper-slide>
              <swiper-slide>
                <img src="../public/src/images/datacon-6.jpg" alt=""
              /></swiper-slide>
              <swiper-slide>
                <img src="../public/src/images/datacon-7.jpg" alt=""
              /></swiper-slide>
              <swiper-slide>
                <img src="../public/src/images/datacon-8.jpg" alt=""
              /></swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>
      <div class="bg-paper p-5 basis-2/3 h-fit">
        <p class="b1">
          I had the opportunity to develop a web application for DataCon 2024
          using Nuxt.js. The project focused on building a quiz feature that
          generates user profiles, allowing attendees to save and explore
          favorite project during the event.
        </p>

        <div class="relative">
          <a
            href="https://www.dataconth.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full absolute -bottom-10 sm:bottom-5 right-0 sm:right-5 z-[1] w-20 shadow-2xl rotate-12"
          >
            <img src="../public/src/images/dataCon.jpg" alt="" />
          </a>

          <p
            class="b5 absolute -bottom-15 sm:bottom-0 right-1 sm:right-7 z-[2] rotate-12"
          >
            Explore more!
          </p>

          <div
            class="flex gap-5 bg-white p-5 shadow-2xl max-w-lg my-12 justify-end mx-auto -rotate-12 rounded-lg"
            data-aos="fade-in"
          >
            <div><img src="../public/src/images/datacon-1.jpg" alt="" /></div>
            <div><img src="../public/src/images/datacon-2.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
