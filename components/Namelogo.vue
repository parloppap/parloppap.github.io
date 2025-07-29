<template>
  <div
    class="absolute min-h-screen w-full overflow-x-clip animate__animated animate__fadeIn animate__delay-1s"
  >
    <div class="circle bg-red-500">
      <img
        src="../public/src/images/smile.png"
        alt=""
        class="w-10 mx-auto translate-y-10"
      />
    </div>
    <div class="circle bg-orange-500">
      <img
        src="../public/src/images/smile.png"
        alt=""
        class="w-10 mx-auto translate-y-10"
      />
    </div>
    <div class="circle bg-yellow-500">
      <img
        src="../public/src/images/smile.png"
        alt=""
        class="w-10 mx-auto translate-y-10"
      />
    </div>
    <div class="circle bg-green-500">
      <img
        src="../public/src/images/smile.png"
        alt=""
        class="w-10 mx-auto translate-y-10"
      />
    </div>
    <div class="circle bg-sky-500">
      <img
        src="../public/src/images/smile.png"
        alt=""
        class="w-10 mx-auto translate-y-10"
      />
    </div>
    <div class="circle bg-blue-500">
      <img
        src="../public/src/images/smile.png"
        alt=""
        class="w-10 mx-auto translate-y-10"
      />
    </div>
    <div class="circle bg-violet-500">
      <img
        src="../public/src/images/smile.png"
        alt=""
        class="w-10 mx-auto translate-y-10"
      />
    </div>

    <div
      class="absolute inset-0 m-auto logo-box pointer-events-none animate__animated animate__pulse animate__delay-1s"
    >
      <img
        src="../public/src/images/fullname-logo.svg"
        alt=""
        class="absolute inset-0 m-auto w-3/4 sm:w-1/4 translate-y-[7%]"
      />
      <img
        src="../public/src/images/fullname-text.svg"
        alt=""
        class="absolute inset-0 m-auto w-3/4 sm:w-1/4 animate__animated animate-spin animate__slower"
      />
    </div>
  </div>
</template>

<script setup>
import 'animate.css';
</script>

<style lang="scss" scoped>
.circle:hover {
  width: 700px;
  height: 700px;
}

.circle:nth-child(1) {
  // animation-delay: 1.2s;
  transition: 0.5s;
  left: -5%;
  bottom: -100px;
  transform: rotate(-25deg);

  @include tablet {
    left: -20%;
    bottom: 425px;
  }
}

.circle:nth-child(2) {
  animation-delay: 1.4s;
  transition: 0.5s;
  left: 10%;
  top: 0%;
  transform: rotate(25deg);

  @include tablet {
    top: 5%;
    left: 30%;
  }
}

.circle:nth-child(3) {
  animation-delay: 1.4s;
  transition: 0.5s;
  left: 20%;
  bottom: -5%;
  transform: rotate(-50deg);

  @include tablet {
    transform: rotate(15deg);
    left: 35%;
    bottom: 200px;
  }
}

.circle:nth-child(4) {
  animation-delay: 1.2s;
  transition: 0.5s;
  left: 40%;
  top: 0;

  @include tablet {
    top: 45%;
  }

  @include mobile {
    top: 65%;
  }
}

.circle:nth-child(5) {
  animation-delay: 1.4s;
  transition: 0.5s;
  right: 25%;
  bottom: -25%;
  transform: rotate(25deg);

  @include tablet {
    right: 50%;
    bottom: 50px;
  }

  @include mobile {
    right: 50%;
    bottom: 125px;
  }
}

.circle:nth-child(6) {
  animation-delay: 1.2s;
  transition: 0.5s;
  right: 5%;
  top: 5%;
  transform: rotate(-25deg);

  @include tablet {
    right: 40%;
    top: 65%;
  }

  @include mobile {
    right: 15%;
    top: 65%;
  }
}

.circle:nth-child(7) {
  animation-delay: 1s;
  transition: 0.5s;
  right: -5%;
  bottom: -10%;
  transform: rotate(25deg);

  @include tablet {
    right: -10%;
    bottom: -300px;
  }

  @include mobile {
    right: -5%;
    bottom: -200px;
  }
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
</style>
