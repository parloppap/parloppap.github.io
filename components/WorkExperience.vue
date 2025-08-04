<script setup>
import 'animate.css';
</script>

<template>
  <div class="px-3 sm:px-10 py-10 lg:py-20">
    <div
      class="relative z-[1] text-white"
      data-aos="zoom-in-up"
      data-aos-duration="500"
    >
      <div
        class="w-40 h-40 rounded-full bg-white flex justify-center items-center mx-auto animate__animated animate__headShake animate__infinite animate__slow"
      >
        <h1 class="font-black !text-[100px] text-green-500">7</h1>
      </div>
      <h5 class="text-center">years of total experiences</h5>

      <div class="py-5 flex flex-col gap-5">
        <div
          data-aos="fade-right"
          class="flex flex-col sm:flex-row gap-2 bg-paper p-3 text-secondary lg:w-3/4"
        >
          <div class="">
            <img
              src="../public/src/images/pu.svg"
              class="w-25 mx-auto"
              alt=""
            />
          </div>
          <div class="flex flex-col gap-2">
            <p class="b1 font-bold">Punch Up World Co., Ltd.</p>
            <p class="b4">Front-End Developer | 2021 - Present</p>
            <ul class="list-disc ml-5">
              <li>
                Collaborated with cross-functional teams (back-end developers,
                designers, product managers) to define project requirements and
                technical solutions.
              </li>
              <li>
                Developed and maintained responsive UI components using Vue.js
                and Nuxt.js.
              </li>
              <li>
                Integrated RESTful APIs to fetch and display dynamic data from
                the back end.
              </li>
              <li>
                Enhanced site speed and accessibility using tools like Google
                Lighthouse.
              </li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-left"
          class="flex flex-col sm:flex-row gap-2 bg-paper p-3 text-secondary lg:w-3/4 ml-auto"
        >
          <div class="">
            <img
              src="../public/src/images/dosetech.png"
              class="w-25 mx-auto"
              alt=""
            />
          </div>
          <div class="flex flex-col gap-2">
            <p class="b1 font-bold">Dosetech Co., Ltd.</p>
            <p class="b4">Front-End Developer | 2018 - 2021</p>
            <ul class="list-disc ml-5">
              <li>
                Collaborated with cross-functional teams (back-end developers
                and designers) to define project requirements and technical
                solutions.
              </li>
              <li>Developed web application using jQuery and Nuxt.js.</li>
              <li>
                Integrated RESTful APIs to fetch and display dynamic data from
                the back end.
              </li>
              <li>
                Assisted in the implementation of SEO best practices and site
                optimization for speed and mobile performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
