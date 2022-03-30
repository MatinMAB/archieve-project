<template>
  <div class="typed-title">
    <vue-typed-js
      :strings="['سامانه مدیریت فایل‌ها']"
      :typeSpeed="100"
      :loop="false"
      :showCursor="false"
    >
      <h1 class="typing"></h1>
    </vue-typed-js>
    <p>مدیریت و نگهداری فایل های اداری سازمانی یا شخصی خود را به ما بسپارید.</p>
    <div class="count-boxes">
      <div class="count-box count-box-1">
        <span>9000 +</span>
        <v-chip class="ma-2" color="pallete2" label text-color="white">
          فایل
          <v-icon right> mdi-file-multiple </v-icon>
        </v-chip>
      </div>
      <div class="count-box count-box-2">
        <span>300 +</span>
        <v-chip class="ma-2" color="pallete2" label text-color="white">
          شرکت
          <v-icon right> mdi-domain </v-icon>
        </v-chip>
      </div>
      <div class="count-box count-box-3">
        <span>3000 +</span>
        <v-chip class="ma-2" color="pallete2" label text-color="white">
          کارمند
          <v-icon right> mdi-account </v-icon>
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTypedTitle",
};
</script>

<style scoped>
.typed-title {
  position: absolute;
  top: 50%;
  right: 50%;
  z-index: 99;
  transform: translate(50%, -50%);
  color: #eeedde;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.4rem;
}
.typed-title p {
  font-size: 1.8rem;
  transform: translateX(-120rem);
  opacity: 0;
  animation: homeTitle 1s ease-in-out forwards 3s;
  color: #e0ddaa;
  text-align: center;
}
.count-boxes {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
}
.count-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(120rem);
  animation: countBox 1s ease-in-out forwards 3.8s;
}
.count-box-1 {
  animation: countBox 1s ease-in-out forwards 3.8s;
}
.count-box-2 {
  animation: countBox 1s ease-in-out forwards 4.1s;
}
.count-box-3 {
  animation: countBox 1s ease-in-out forwards 4.4s;
}
.count-box span {
  color: #eeedde;
  font-size: 1.8rem;
}

/* animation */
@keyframes homeTitle {
  0% {
    transform: translateX(-120rem);
    opacity: 0;
  }
  90% {
    transform: translateX(8rem);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes countBox {
  0% {
    transform: translateX(120rem);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* query for responsive */
@media screen and (max-width: 888px) {
  .typed-title {
    font-size: 1.8rem;
  }
  .typed-title p {
    font-size: 1.6rem;
  }
}
@media screen and (max-width: 666px) {
  .typed-title {
    font-size: 1.2rem;
  }
  .typed-title p {
    font-size: 1.2rem;
  }
  .count-box span {
    font-size: 1.4rem;
  }
  .count-boxes {
    gap: 3rem;
  }
}
@media screen and (max-width: 444px) {
  .typed-title {
    font-size: 0.9rem;
  }
  .typed-title p {
    font-size: 0.9rem;
  }
  .count-box span {
    font-size: 1.2rem;
  }
  .count-boxes {
    
    gap: 1rem;
  }
}
@media screen and (max-width: 333px) {
  .typed-title {
    font-size: 0.7rem;
  }
  .typed-title p {
    font-size: 0.8rem;
  }
}
</style>
