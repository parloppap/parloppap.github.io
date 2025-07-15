<script setup>
import scrollama from 'scrollama';
const scroller = scrollama();
const step = ref(0);

onMounted(() => {
  // setup the instance, pass callback functions
  nextTick(() => {
    scroller
      .setup({
        step: '.step',
        offset: 0.9,
      })
      .onStepEnter((response) => {
        step.value = response.index;
      })
      .onStepExit((response) => {
        // { element, index, direction }
      });
  });
});
</script>

<template>
  <div class="relative">
    <div
      class="min-h-screen overflow-hidden flex justify-center items-center sticky top-0"
    >
      <div class="flex">
        <h1 class="title" :class="{ 'opacity-0': step >= 1 }">h</h1>
        <h1 class="title" :class="{ 'opacity-0': step >= 1 }">e</h1>
        <h1 class="title" :class="{ 'opacity-0': step >= 1 }">l</h1>
        <h1 class="title" :class="{ 'opacity-0': step >= 1 }">l</h1>
        <h1 class="title" :class="{ 'opacity-0': step >= 1 }">o</h1>
        <h1 class="title" :class="{ 'opacity-0': step >= 1 }">!</h1>
      </div>

      <p
        class="absolute bottom-5 inset-x-0 text-center"
        :class="{ 'opacity-0': step >= 1 }"
      >
        scroll down to explore
      </p>

      <Namelogo v-if="step >= 1" :step="step" />
    </div>
    <div class="">
      <div class="h-[50vh] step" v-for="item in 3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Pacifico', system-ui;
  font-size: 15vw;
  animation: wave 2s ease-in-out infinite;

  @include tablet {
    font-size: 25vw;
  }
}

.title:nth-child(1) {
  animation-delay: 0s;
  color: #5e72eb;
  transition: 0.5s;
}
.title:nth-child(2) {
  animation-delay: 0.2s;
  color: #ff9190;
}
.title:nth-child(3) {
  animation-delay: 0.4s;
  color: #fec195;
  transition: 0.5s;
}
.title:nth-child(4) {
  animation-delay: 0.6s;
  color: #ffe2e2;
}
.title:nth-child(5) {
  animation-delay: 0.8s;
  color: #f6f6f6;
}
.title:nth-child(6) {
  animation-delay: 1s;
  color: #8785a2;
  transition: 0.5s;
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
