<template setup>
  <div class="loader-wrapper">
    <div class="loader loader-1" />
    <div class="loader loader-2" />
    <div class="loader loader-3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SpinningCircle",
});
</script>

<style lang="less" scoped>
@blue: #008aff;

.loader-wrapper {
  position: relative;
  width: 100%;
  padding-top: 100%; // aspect-ratio the same as width

  .loader {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    padding-top: 100%; // aspect-ratio the same as width
  }
}

.loader-1 {
  &:before {
    content: "";
    position: absolute;
    top: 14%;
    left: 14%;
    bottom: 14%;
    right: 14%;
    border-radius: 100%;
    border: 1.5em solid transparent;
    @factor: 97%;
    border-top-color: fade(darken(@blue, @factor), 100% - @factor);
    border-left-color: fade(darken(@blue, @factor), 100% - @factor);
    @media (prefers-color-scheme: dark) {
      border-top-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-left-color: fade(lighten(@blue, @factor), 100% - @factor);
    }
    animation: spin 183s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 23%;
    left: 23%;
    right: 23%;
    bottom: 23%;
    border-radius: 100%;
    border: 1.2em solid transparent;
    @factor: 95%;
    border-left-color: fade(darken(@blue, @factor), 100% - @factor);
    border-right-color: fade(darken(@blue, @factor), 100% - @factor);
    @media (prefers-color-scheme: dark) {
      border-left-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-right-color: fade(lighten(@blue, @factor), 100% - @factor);
    }
    animation: spin 147s linear infinite;
  }
}
.loader-2 {
  &:before {
    content: "";
    position: absolute;
    top: 30%;
    left: 30%;
    right: 30%;
    bottom: 30%;
    border-radius: 100%;
    border: 1em solid transparent;
    @factor: 87%;
    border-top-color: fade(darken(@blue, @factor), 100% - @factor);
    border-left-color: fade(darken(@blue, @factor), 100% - @factor);
    border-right-color: fade(darken(@blue, @factor), 100% - @factor);
    @media (prefers-color-scheme: dark) {
      border-top-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-left-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-right-color: fade(lighten(@blue, @factor), 100% - @factor);
    }
    animation: spin 171s linear infinite;
    opacity: 0.3;
  }

  &:after {
    content: "";
    position: absolute;
    top: 35%;
    left: 35%;
    bottom: 35%;
    right: 35%;
    border-radius: 100%;
    border: 0.8em solid transparent;
    @factor: 75%;
    border-top-color: fade(darken(@blue, @factor), 100% - @factor);
    border-left-color: fade(darken(@blue, @factor), 100% - @factor);
    @media (prefers-color-scheme: dark) {
      border-top-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-left-color: fade(lighten(@blue, @factor), 100% - @factor);
    }
    animation: spin 101s linear infinite;
  }
}

.loader-3 {
  &:before {
    content: "";
    position: absolute;
    top: 40%;
    left: 40%;
    bottom: 40%;
    right: 40%;
    border-radius: 100%;
    border: 0.7em solid transparent;
    @factor: 50%;
    border-top-color: fade(darken(@blue, @factor), 100% - @factor);
    border-bottom-color: fade(darken(@blue, @factor), 100% - @factor);
    @media (prefers-color-scheme: dark) {
      border-top-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-bottom-color: fade(lighten(@blue, @factor), 100% - @factor);
    }
    animation: spin 63s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 45%;
    left: 45%;
    right: 45%;
    bottom: 45%;
    border-radius: 100%;
    border: 0.6em solid transparent;

    @factor: 0%;
    border-top-color: fade(darken(@blue, @factor), 100% - @factor);
    border-right-color: fade(darken(@blue, @factor), 100% - @factor);
    border-bottom-color: fade(darken(@blue, @factor), 100% - @factor);
    @media (prefers-color-scheme: dark) {
      border-top-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-right-color: fade(lighten(@blue, @factor), 100% - @factor);
      border-bottom-color: fade(lighten(@blue, @factor), 100% - @factor);
    }
    animation: spin 39s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
