<script setup></script>

<template>
  <div class="min-h-screen">
    <div class="max-w-screen-xl mx-auto px-3 py-20">
      <div class="flex justify-center gap-10 flex-col sm:flex-row">
        <div class="bg-white rounded-lg border border-black basis-1/3 h-fit">
          <div class="p-3">
            <img
              src="../public/src/images/corgi.png"
              alt=""
              class="w-6 inline"
            />
            <p class="inline ml-2">pimpa.ang</p>
          </div>
          <img src="../public/src/images/me.jpg" class="" alt="" />
          <!-- <div class="p-3">💖</div> -->
          <div class="p-3">
            <p class="inline ml-2"><b>pimpa.ang</b> : Nice to meet you!</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-2 basis-2/3">
          <div
            class="bg-paper w-full p-4 shadow-md"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h5 class="font-bold">
              Pimpatipan Angkharuengrattana
              <span class="w-5 h-2 bg-black"></span>
            </h5>
            <p class="b2">Front-End Developer</p>
            <p class="b2 mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div
            class="bg-paper w-full p-4 shadow-md"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h5 class="font-bold">Education</h5>
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
            data-aos-duration="1000"
          >
            <h5 class="font-bold">Skills</h5>
            <img src="../public/src/images/nuxt.svg" class="w-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-paper {
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  background-size: 8% 8%, 2px 2px;
  background-color: #f9f9f9;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));
  border-radius: 10px;
}
</style>
