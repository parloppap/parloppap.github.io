<template>
  <div class="absolute min-h-screen w-full duration-300">
    <div class="absolute bottom-0 w-full">
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
    </div>

    <div class="absolute inset-0 m-auto logo-box">
      <img
        src="../public/src/images/logo.svg"
        alt=""
        class="absolute inset-0 m-auto w-3/4 sm:w-auto"
      />
      <img
        src="../public/src/images/fullname.svg"
        alt=""
        class="flower absolute inset-0 m-auto"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  step: Number,
});
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Sniglet';
  font-size: 15vw;
}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include mobile {
    width: 350px;
    height: 350px;
  }
}

.flower {
  animation: spin 10s infinite linear;
}

.test {
  left: 0;
  right: 0;
  margin: auto;
}

.logo-box {
  max-width: 400px;
  animation: bounce-in-top 1.1s both;
  animation-delay: 1s;
}

.circle:nth-child(1) {
  animation-delay: 0.2s;
  transition: 0.5s;
  left: -5%;
  bottom: -200px;

  @include mobile {
    left: -25%;
    bottom: 425px;
  }
}

.circle:nth-child(2) {
  animation-delay: 0.4s;
  transition: 0.5s;
  left: 10%;
  bottom: -150px;

  @include tablet {
    bottom: -200px;
  }

  @include mobile {
    left: 25%;
    bottom: 350px;
  }
}

.circle:nth-child(3) {
  animation-delay: 0.4s;
  transition: 0.5s;
  left: 22%;
  bottom: -250px;

  @include mobile {
    left: 35%;
    bottom: 200px;
  }
}

.circle:nth-child(4) {
  animation-delay: 0.2s;
  transition: 0.5s;
  left: 38%;
  bottom: -250px;

  @include mobile {
    bottom: 50px;
  }
}

.circle:nth-child(5) {
  animation-delay: 0.4s;
  transition: 0.5s;
  right: 24%;
  bottom: -225px;

  @include mobile {
    right: 50%;
    bottom: 125px;
  }
}

.circle:nth-child(6) {
  animation-delay: 0.2s;
  transition: 0.5s;
  right: 10%;
  bottom: -250px;

  @include tablet {
    right: 5%;
    bottom: -250px;

    @include mobile {
      right: 15%;
      bottom: -100px;
    }
  }
}

.circle:nth-child(7) {
  animation-delay: 0s;
  transition: 0.5s;
  right: -5%;
  bottom: -150px;

  @include tablet {
    right: -10%;
    bottom: -200px;
  }

  @include mobile {
    bottom: -200px;
  }
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
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

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
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
