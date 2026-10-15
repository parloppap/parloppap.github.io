<script setup></script>

<template>
  <div class="relative z-1">
    <div class="mx-auto px-3 sm:px-10 py-20">
      <div class="flex justify-center gap-10 flex-col lg:flex-row">
        <div
          class="bg-white rounded-lg border border-black basis-1/3 h-fit max-w-[320px] mx-auto">
          <div class="p-3">
            <img
              src="../public/src/images/logo.svg"
              alt=""
              class="w-6 inline" />
            <p class="inline ml-2">pimpa.ang</p>
          </div>
          <img src="../public/src/images/me.jpg" class="" alt="" />
          <!-- <div class="p-3">💖</div> -->
          <div class="p-3">
            <p class="inline ml-2"><b>pimpa.ang</b> : Greetings!</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-2 basis-2/3">
          <div
            class="bg-paper w-full p-4 shadow-md"
            data-aos="fade-down"
            data-aos-duration="1000">
            <h5 class="font-bold">
              Pimpatipan Angkharuengrattana
              <span class="w-5 h-2 bg-black"></span>
            </h5>
            <p class="b2">Front-End Developer</p>
            <p class="b3 my-4">
              Front-End Developer with 8 years of experience specializing in building modern web applications using React, Vue.js, and TypeScript. Proven track record in translating complex specs into clean, responsive UI and improving app performance. Seeking to contribute core technical skills and team collaboration to drive impactful web solutions.
            </p>
          </div>

          <div
            class="bg-paper w-full p-4 shadow-md"
            data-aos="fade-down"
            data-aos-duration="1000">
            <h5 class="font-bold mb-2 underline">Education</h5>
            <p class="b2">Thai-Nichi Institute of Technology | 2014 - 2018</p>
            <p class="b4">
              Bachelor Of Science, Major In Information Technology
            </p>

            <p class="b2 mt-5">Sirirattanathorn School | 2012 - 2014</p>
            <p class="b4">Intensive English Program</p>
          </div>

          <div
            class="bg-paper w-full p-4 shadow-md"
            data-aos="fade-down"
            data-aos-duration="1000">
            <h5 class="font-bold underline">Skills</h5>
            <div class="flex flex-col gap-3 flex-wrap my-3">
              <p class="font-bold">Core Tech:</p>
              <p>
                HTML5, CSS3 (SCSS), JavaScript (ES6+) TypeScript,Vue.js (2/3),
                Nuxt.js, Next.js, jQuery
              </p>

              <p class="font-bold">Styling & Tools:</p>
              <p>Pinia, TailwindCSS, Firebase, Git, Google Analytics</p>

              <p class="font-bold">Soft Skills:</p>
              <p>
                Stakeholder Communication, Problem-Solving, Cross-functional
                Collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
