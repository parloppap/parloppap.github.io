<template>
  <div class="min-h-screen">
    <div class="max-w-screen-xl mx-auto px-3 py-20">
      <div
        class="p-4 border-l-4 border-r-4 border-white rounded-lg text-center text-white w-fit mx-auto"
      >
        <h1 class="title uppercase relative">
          <span class="text-[#fed2e2]">S</span>howcase ⭐
        </h1>
      </div>

      <div
        class="flex flex-wrap gap-x-4 sm:gap-x-10 gap-y-20 justify-center py-20"
      >
        <div
          class="flex flex-col justify-center relative"
          v-for="item in 15"
          data-aos="zoom-in"
        >
          <div
            class="folder shadow-md relative z-[1]"
            :class="{
              'bg-[#6DE1D2]': item >= 0 && item <= 4,
              'bg-[#FFD63A]': item >= 5 && item <= 8,
              'bg-[#FFA955]': item >= 9 && item <= 12,
              'bg-[#FF8282]': item >= 13 && item <= 16,
            }"
          >
            <div
              class="header"
              :class="{
                'bg-[#6DE1D2]': item >= 0 && item <= 4,
                'bg-[#FFD63A]': item >= 5 && item <= 8,
                'bg-[#FFA955]': item >= 9 && item <= 12,
                'bg-[#FF8282]': item >= 13 && item <= 16,
              }"
            ></div>
          </div>

          <img
            src="../public/src/images/moon.png"
            alt=""
            class="duration-300 absolute w-full max-w-60 inset-x-0 mx-auto -top-16 sm:-top-10"
          />

          <p class="text-center my-3 text-white">test</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.folder {
  position: relative;
  width: 250px;
  height: 150px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;

  @include mobile {
    width: 150px;
    height: 100px;
  }

  .header {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: absolute;
    width: 100px;
    height: 30px;
    top: -20px;
  }
}

.folder:hover ~ img {
  top: -5rem;

  @include mobile {
    top: -4rem;
  }
}
</style>
