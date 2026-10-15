<template>
  <div class="relative">
    <div class="h-screen overflow-hidden flex justify-center items-center">
      <div class="hello-fade-out">
        <div class="flex">
          <h1 class="title">h</h1>
          <h1 class="title">e</h1>
          <h1 class="title">l</h1>
          <h1 class="title">l</h1>
          <h1 class="title">o</h1>
          <h1 class="title">!</h1>
        </div>
      </div>

      <Namelogo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Own animation instead of animate.css's fadeOut: animate.css cuts animations
// to 1ms under prefers-reduced-motion, so "hello!" would vanish instantly.
.hello-fade-out {
  animation: fade-out 1.5s ease-out 5s both;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
