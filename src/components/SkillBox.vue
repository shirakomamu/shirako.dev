<script setup lang="ts">
import OpenInNew from "@/components/icons/IconOpenInNew.vue";

const props = defineProps<{
  name: string;
  link?: string;
  logoSrc?: string;
  logoSrcWhenDark?: string;
  logoAlt?: string;
}>();
</script>

<template>
  <component
    :is="props.link ? 'a' : 'div'"
    :href="props.link"
    :target="props.link ? '_blank' : null"
    :rel="props.link ? 'noopener noreferrer' : null"
    class="box cursor-default p-4 flex flex-col items-center justify-center rounded-lg bg-gray-200/50 dark:bg-gray-600/50"
    :class="{ pointer: props.link }"
  >
    <div class="container-block w-full">
      <OpenInNew
        v-if="props.link"
        class="open-in-new-icon icon-inline opacity-50 text-sm"
      />
      <img
        v-if="props.logoSrc"
        :src="props.logoSrc"
        :alt="props.logoAlt"
        class="mx-auto my-2 skill-icon"
        :class="{
          'dark:hidden': props.logoSrcWhenDark,
        }"
      />
      <img
        v-if="props.logoSrcWhenDark"
        :src="props.logoSrcWhenDark"
        :alt="props.logoAlt"
        class="hidden dark:block mx-auto my-2 skill-icon"
      />
      <p
        class="text-center text-sm font-semibold overflow-hidden overflow-ellipsis"
      >
        {{ props.name }}
      </p>
    </div>
  </component>
</template>

<style lang="less" scoped>
.box.pointer {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-property: background-color opacity;
  transition-duration: 0.4s;

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.4s;
    background: linear-gradient(
      90deg,
      rgba(253, 29, 29, 0.15) 0%,
      rgba(252, 176, 69, 0.15) 100%
    );
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: -50%;
    left: -200%;
    width: 200%;
    height: 150%;
    opacity: 0;
    animation: shine 1.5s infinite cubic-bezier(0.52, 0.36, 0.48, 0.9);
    transition-property: opacity;
    transition-duration: 1.5s;
    background: linear-gradient(
      -30deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.5) 30%,
      rgba(255, 255, 255, 0.9) 35%,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 0.9) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    );
  }

  &:hover:after {
    @apply opacity-20 dark:opacity-2;
  }
}

.container-block {
  z-index: 2;
}

@keyframes shine {
  100% {
    left: 100%;
  }
}

.open-in-new-icon {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  height: 1rem;
  width: 1rem;
}

.skill-icon {
  height: 2rem;
  width: auto;
  object-fit: scale-down;
}
</style>
