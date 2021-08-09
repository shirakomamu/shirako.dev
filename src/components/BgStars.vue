<template>
  <div ref="container" class="fixed inset-0 pointer-events-none ps-bg-flat">
    <div class="fixed inset-0 radial" />
    <div ref="s1" class="stars stars-1 a-frame" />
    <div ref="s2" class="stars stars-2 a-frame" />
    <!-- <div ref="s3" class="stars stars-3 a-frame" /> -->
    <div ref="s1b" class="stars stars-1 b-frame" />
    <div ref="s2b" class="stars stars-2 b-frame" />
    <!-- <div ref="s3b" class="stars stars-3 b-frame" /> -->
    <!-- <div ref="sh1" class="stars shooting shooting-1 a-frame" />
    <div ref="sh1b" class="stars shooting shooting-1 b-frame" /> -->
    <!-- <div ref="sh2" class="stars shooting shooting-2 a-frame" />
    <div ref="sh2b" class="stars shooting shooting-2 b-frame" />
    <div ref="sh3" class="stars shooting shooting-3 a-frame" />
    <div ref="sh3b" class="stars shooting shooting-3 b-frame" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "BgStars",
  setup() {
    // the extra elements are commented out to keep performance to a reasonable level

    const MIN_OPACITY = 40; // percent
    const MAX_OPACITY = 100; // percent
    const NUM_SMALL_STARS_PER_10K_SQUARE_PX = 1;
    const NUM_MEDIUM_STARS_PER_10K_SQUARE_PX = 0.5;
    // const NUM_LARGE_STARS_PER_10K_SQUARE_PX = 0.3;
    // const NUM_SHOOTING_STARS_PER_10K_SQUARE_PX = 0.02;

    const container = ref<HTMLDivElement | null>(null);
    const s1 = ref<HTMLDivElement | null>(null);
    const s2 = ref<HTMLDivElement | null>(null);
    // const s3 = ref<HTMLDivElement | null>(null);
    const s1b = ref<HTMLDivElement | null>(null);
    const s2b = ref<HTMLDivElement | null>(null);
    // const s3b = ref<HTMLDivElement | null>(null);
    // const sh1 = ref<HTMLDivElement | null>(null);
    // const sh1b = ref<HTMLDivElement | null>(null);
    // const sh2 = ref<HTMLDivElement | null>(null);
    // const sh2b = ref<HTMLDivElement | null>(null);
    // const sh3 = ref<HTMLDivElement | null>(null);
    // const sh3b = ref<HTMLDivElement | null>(null);

    const boxShadowElemGenerator = (n: number) => {
      const r = new Array(n).fill(null);

      const z = r.map(() => {
        const rr = `${Math.floor(100 * Math.random() * 100) / 100}vw ${
          Math.floor(100 * Math.random() * 100) / 100
        }vh rgba(var(--text-color-current), ${
          Math.round(
            (MAX_OPACITY - MIN_OPACITY) * Math.random() + MIN_OPACITY
          ) / 100
        })`;

        return rr;
      });

      return z.join(",");
    };

    const setStars = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const ss1 = s1.value as HTMLDivElement;
      const ss2 = s2.value as HTMLDivElement;
      // const ss3 = s3.value as HTMLDivElement;
      const ss1b = s1b.value as HTMLDivElement;
      const ss2b = s2b.value as HTMLDivElement;
      // const ss3b = s3b.value as HTMLDivElement;
      // const ssh1 = sh1.value as HTMLDivElement;
      // const ssh1b = sh1b.value as HTMLDivElement;
      // const ssh2 = sh2.value as HTMLDivElement;
      // const ssh2b = sh2b.value as HTMLDivElement;
      // const ssh3 = sh3.value as HTMLDivElement;
      // const ssh3b = sh3b.value as HTMLDivElement;

      const numSmallStars = Math.round(
        (NUM_SMALL_STARS_PER_10K_SQUARE_PX * width * height) / 10000
      );
      const numMediumStars = Math.round(
        (NUM_MEDIUM_STARS_PER_10K_SQUARE_PX * width * height) / 10000
      );
      // const numLargeStars = Math.round(
      //   (NUM_LARGE_STARS_PER_10K_SQUARE_PX * width * height) / 10000
      // );
      // const numShootingStars = Math.round(
      //   (NUM_SHOOTING_STARS_PER_10K_SQUARE_PX * width * height) / 10000
      // );

      ss1.style.boxShadow = boxShadowElemGenerator(numSmallStars);
      ss2.style.boxShadow = boxShadowElemGenerator(numMediumStars);
      // ss3.style.boxShadow = boxShadowElemGenerator(numLargeStars);
      ss1b.style.boxShadow = boxShadowElemGenerator(numSmallStars);
      ss2b.style.boxShadow = boxShadowElemGenerator(numMediumStars);
      // ss3b.style.boxShadow = boxShadowElemGenerator(numLargeStars);
      // ssh1.style.boxShadow = boxShadowElemGenerator(
      //   Math.round(numShootingStars)
      // );
      // ssh1b.style.boxShadow = boxShadowElemGenerator(
      //   Math.round(numShootingStars)
      // );
      // ssh2.style.boxShadow = boxShadowElemGenerator(
      //   Math.round(numShootingStars / 3)
      // );
      // ssh2b.style.boxShadow = boxShadowElemGenerator(
      //   Math.round(numShootingStars / 3)
      // );
      // ssh3.style.boxShadow = boxShadowElemGenerator(
      //   Math.round(numShootingStars / 3)
      // );
      // ssh3b.style.boxShadow = boxShadowElemGenerator(
      //   Math.round(numShootingStars / 3)
      // );
    };

    onMounted(() => {
      setStars();
    });

    const resizeObserver = ref<null | ResizeObserver>(null);

    onMounted(() => {
      resizeObserver.value = new ResizeObserver(() => {
        setStars();
      });
      resizeObserver.value.observe(container.value as HTMLDivElement);
    });

    onUnmounted(() => resizeObserver.value?.disconnect());

    return {
      container,
      s1,
      s2,
      // s3,
      s1b,
      s2b,
      // s3b,
      // sh1,
      // sh1b,
      // sh2,
      // sh2b,
      // sh3,
      // sh3b,
      resizeObserver,
    };
  },
});
</script>

<style lang="less" scoped>
.fixed {
  z-index: -1;
}

.radial {
  --color-shine: theme("colors.true-gray.100");
  --color-bg: theme("colors.white");
  background: radial-gradient(
    circle at bottom,
    var(--color-shine) 0%,
    var(--color-bg) 50%
  );
}

.stars {
  --text-color-current: 0, 0, 0;

  &.stars-1 {
    filter: drop-shadow(0 0px 1px rgba(var(--text-color-current), 0.8));
  }
  &.stars-2 {
    filter: drop-shadow(0 0px 2px rgba(var(--text-color-current), 0.8));
  }
  &.stars-3 {
    filter: drop-shadow(0 0px 5px rgba(var(--text-color-current), 0.8));
  }
  &.shooting {
    // filter: drop-shadow(0 0px 2px rgb(var(--text-color-current)))
    //   drop-shadow(0 10px 0px rgba(var(--text-color-current), 0.3))
    //   drop-shadow(0 15px 0px rgba(var(--text-color-current), 0.1));
    filter: drop-shadow(0 5px 2px rgba(var(--text-color-current), 0.5));
    // filter: drop-shadow(0 5px 1px rgba(var(--text-color-current), 0.5));
  }
}

.dark {
  .radial {
    --color-shine: theme("colors.dark.300");
    --color-bg: theme("colors.dark.800");
  }
  .stars {
    --text-color-current: 255, 255, 255;
  }
}

.stars-1 {
  width: 1px;
  height: 1px;
  &.a-frame {
    animation: animStarA 150s linear infinite;
  }
  &.b-frame {
    animation: animStarB 150s linear infinite;
  }
}
.stars-2 {
  width: 2px;
  height: 2px;
  &.a-frame {
    animation: animStarA 300s linear infinite;
  }
  &.b-frame {
    animation: animStarB 300s linear infinite;
  }
}
.stars-3 {
  width: 2px;
  height: 2px;
  border-radius: 100%;
  &.a-frame {
    animation: animStarA 400s linear infinite;
  }
  &.b-frame {
    animation: animStarB 400s linear infinite;
  }
}
.shooting-1 {
  width: 1px;
  height: 30px;
  &.a-frame {
    animation: animStarA 120s linear infinite;
  }
  &.b-frame {
    animation: animStarB 120s linear infinite;
  }
}
.shooting-2 {
  width: 1px;
  height: 40px;
  &.a-frame {
    animation: animStarA 80s linear infinite;
  }
  &.b-frame {
    animation: animStarB 80s linear infinite;
  }
}
.shooting-3 {
  width: 1.5px;
  height: 20px;
  &.a-frame {
    animation: animStarA 160s linear infinite;
  }
  &.b-frame {
    animation: animStarB 160s linear infinite;
  }
}

@keyframes animStarA {
  0% {
    transform: translateY(0);
  }
  50% {
    animation-timing-function: steps(1, end);
    transform: translateY(-100vh);
  }
  50.01% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes animStarB {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(-100vh);
  }
}
</style>
