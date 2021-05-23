<template>
  <a
    @mouseover="showEmail"
    @focus="showEmail"
    @mouseout="hideEmail"
    @blur="hideEmail"
    :href="emailMailto"
    class="text-blue-500 hover:underline focus:underline"
  >
    {{ emailText }}
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppFooter",
  props: {
    text: {
      type: String,
      default: () => "say hello",
    },
  },
  setup(props) {
    const isEmailShown = ref(false);

    const name = "hello";
    const domain = "shirako";
    const tld = "dev";
    const emailAddress = name + "@" + domain + "." + tld;
    const emailLink = "mailto" + ":" + emailAddress;

    const emailText = computed(() => {
      return isEmailShown.value ? emailAddress : props.text;
    });
    const emailMailto = computed(() => {
      return isEmailShown.value ? emailLink : "";
    });

    const showEmail = () => (isEmailShown.value = true);
    const hideEmail = () => (isEmailShown.value = false);

    return {
      isEmailShown,
      showEmail,
      hideEmail,
      emailMailto,
      emailText,
    };
  },
});
</script>

<style lang="less" scoped></style>
