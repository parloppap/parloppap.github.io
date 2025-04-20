<script setup>
const scrollPercent = ref(0);
const isLoading = ref(true);
const isHideLoading = ref(true);

onMounted(() => {
  const animal = document.querySelector('#js-animal');
  const progressBar = document.querySelector('#js-progressbar');

  let id = setInterval(progressPercent, 500);
  let x = 0;

  function progressPercent() {
    if (scrollPercent.value > 100) {
      clearInterval(id);

      setTimeout(() => {
        isLoading.value = false;
      }, 500);

      setTimeout(() => {
        isHideLoading.value = false;
      }, 1000);
    } else {
      progressBar.setAttribute('value', scrollPercent.value);
      animal.style.setProperty('--move', scrollPercent.value + '%');
      x += 25;
      scrollPercent.value = x;
    }
  }
});
</script>

<template>
  <div
    class="bg-[#6dd3e7] fixed inset-0 flex justify-center items-center px-3 duration-300 h-screen z-10"
    :class="{ '!h-0': !isHideLoading }"
  >
    <div
      class="w-full text-center pointer-events-none duration-300"
      :class="{ 'opacity-0': !isLoading }"
    >
      <div class="progress mx-auto">
        <progress id="js-progressbar" value="0" max="100"></progress>
        <span id="js-animal" class="animal"
          ><img src="../public/src/images/corgi.png" class="w-9" alt=""
        /></span>
      </div>
      <h4 class="mt-3">Loading..</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  position: relative;
  width: 100%;
  max-width: 400px;
  background: none;
  border: 0;
  height: auto;
  margin: 0 auto;
  padding: 0;
  pointer-events: none;

  progress {
    position: relative;
    display: block;
    height: 20px;
    width: 100%;
    border: 0;
    background-color: transparent;
    -webkit-appearance: none;
  }

  ::-moz-progress-bar {
    background-image: linear-gradient(132deg, #fc0384 0%, #03f8fc 100%);
    border-radius: 10px;
  }

  ::-webkit-progress-bar {
    background-color: transparent;
  }

  ::-webkit-progress-value {
    background-image: linear-gradient(132deg, #fc0384 0%, #03f8fc 100%);
    border-radius: 10px;
    -webkit-transition: width 0.3s ease;
    -moz-transition: width 0.3s ease;
    -o-transition: width 0.3s ease;
    transition: width 0.3s ease;
  }

  .animal {
    position: absolute;
    display: block;
    top: -5px;
    left: calc(var(--move) - 2rem);
    z-index: 1;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
}
</style>
