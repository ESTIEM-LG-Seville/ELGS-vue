<template>
    <v-btn
      icon="fas fa-arrow-up"
      density="comfortable"
      class="back-to-top"
      v-scroll="showBtn"
      @click="moveToTop"
    >
    </v-btn>
</template>

<script lang="ts" setup>
  function moveToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(moveToTop);
      window.scrollTo(0, c - (c / 15));
    }
  }
  function showBtn() {
    const btn = document.querySelector('.back-to-top');
    if (btn !== null) {
      window.onscroll = () => {
        if (document.documentElement.scrollTop < 25 && btn instanceof HTMLElement) {
          btn.style.visibility = 'hidden';
        } else if (btn !== null && btn instanceof HTMLElement) {
          btn.style.visibility = 'visible';
        }
      };
    }
  }
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 50px;
  right: 17px;
  cursor: pointer;
  z-index: 1;
  width: 40px;
  height: 40px;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 450px) {
  .back-to-top {
    position: fixed;
    bottom: 70px;
    right: 17px;
  }
}
@media screen and (max-width: 768px) {
  .back-to-top {
    position: fixed;
    bottom: 70px;
    right: 17px;
  }
}
@media screen and (max-width: 1120px) {
  .back-to-top {
    position: fixed;
    bottom: 80px;
    right: 17px;
  }
}
</style>