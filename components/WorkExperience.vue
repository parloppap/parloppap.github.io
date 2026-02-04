<script setup>
import 'animate.css';
</script>

<template>
  <div class="px-3 sm:px-10 py-10 lg:py-20">
    <div
      class="relative z-1 text-white"
      data-aos="zoom-in-up"
      data-aos-duration="500">
      <div
        class="w-40 h-40 rounded-full bg-white flex justify-center items-center mx-auto animate__animated animate__headShake animate__infinite animate__slow">
        <h1 class="font-black text-[100px]! text-green-500">7</h1>
      </div>
      <h5 class="text-center">years of total experiences</h5>

      <div class="py-5 flex flex-col gap-5">
        <div
          data-aos="fade-left"
          class="flex flex-col gap-2 bg-paper p-5 text-secondary lg:w-3/4 ml-auto">
          <div class="flex justify-between">
            <div>
              <p class="b1 font-bold">TMES CO., Ltd.</p>
              <p class="b4">Front-End Developer | 2025 - 2026</p>
            </div>

            <img src="../public/src/images/tmes.svg" class="w-40" alt="tmes" />
          </div>
          <div class="flex flex-col gap-2">
            <ul class="list-disc ml-5">
              <li>
                Spearheaded the maintenance and feature expansion of Business
                Management and eKYC platforms, focusing on optimizing user
                workflows and ensuring strict compliance with security
                standards.
              </li>
              <li>
                Utilized Vue 3 and Next.js to deliver high-performance web
                applications, transitioning legacy components into modern,
                maintainable structures.
              </li>
              <li>
                Collaborated with product owners and back-end engineers to
                translate complex business requirements into technical
                specifications, reducing development friction and enhancing
                delivery speed.
              </li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-right"
          class="gap-2 bg-paper p-5 text-secondary lg:w-3/4">
          <div class="flex justify-between">
            <div>
              <p class="b1 font-bold">Punch Up World CO., Ltd.</p>
              <p class="b4">Front-End Developer | 2021 - 2025</p>
            </div>

            <img
              src="../public/src/images/pu.svg"
              class="w-15 relative bottom-2"
              alt="pu" />
          </div>

          <div class="flex flex-col gap-2">
            <ul class="list-disc ml-5">
              <li>
                Led the development of complex, responsive web applications
                using Vue.js and Nuxt.js, focusing on building scalable and
                reusable UI component libraries to improve development
                efficiency.
              </li>
              <li>
                Directed the integration of RESTful APIs to manage dynamic data
                flows, ensuring optimal performance and seamless synchronization
                between front-end and back-end systems.
              </li>
              <li>
                Acted as a key technical liaison between designers, back-end
                developers, and product managers to refine project requirements
                and deliver high-impact technical solutions.
              </li>
              <li>
                Ensured high code quality through best practices in modern
                JavaScript, contributing to a stable and maintainable codebase
                for long-term project success.
              </li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-left"
          class="gap-2 bg-paper p-5 text-secondary lg:w-3/4 ml-auto">
          <div class="flex justify-between">
            <div>
              <p class="b1 font-bold">Dosetech CO., Ltd.</p>
              <p class="b4">Front-End Developer | 2018 - 2021</p>
            </div>

            <img
              src="../public/src/images/dosetech.png"
              class="w-15 relative bottom-2"
              alt="dosetech" />
          </div>

          <div class="flex flex-col gap-2">
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
