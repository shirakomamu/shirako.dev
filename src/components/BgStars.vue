<template>
  <div class="fixed inset-0 pointer-events-none ps-bg-flat">
    <div class="fixed inset-0 radial" />
    <div ref="threeContainer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import * as THREE from "three";

export default defineComponent({
  name: "BgStars",
  setup() {
    const STAR_DENSITY = 0.2;
    const CAMERA_FOV = 60;
    const CAMERA_NEAR_LIMIT = 1;
    const CAMERA_FAR_LIMIT = 1000;
    const STAR_Z_MIN = 500;
    const STAR_Z_MAX = 1000;
    const LIGHT_STAR_COLOR = 0x000000;
    const DARK_STAR_COLOR = 0xffffff;
    const camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      window.innerWidth / window.innerHeight,
      CAMERA_NEAR_LIMIT,
      CAMERA_FAR_LIMIT
    );

    camera.lookAt(0, 0, CAMERA_FAR_LIMIT);

    const getStarCount = () => {
      return Math.floor(
        window.innerWidth * window.innerHeight * STAR_DENSITY * 1e-3
      );
    };

    const threeContainer = ref<null | HTMLDivElement>(null);

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const setElement = () => {
      if (!threeContainer.value) return;
      threeContainer.value.replaceChildren(renderer.domElement);
    };

    const setCamera = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      renderer.setSize(window.innerWidth, window.innerHeight, true);
    };

    const starColor = ref<number>(DARK_STAR_COLOR);

    const geometry = new THREE.BufferGeometry();

    const setSpheres = () => {
      scene.clear();
      geometry.deleteAttribute("position");
      geometry.deleteAttribute("color");
      const starCount = getStarCount();
      const vertices: THREE.Vector3[] = [];

      console.log(window.innerWidth, window.innerHeight);

      for (let i = 0; i < starCount; i++) {
        const position = new THREE.Vector3(
          (Math.random() - 0.5) * window.innerWidth * 1.5, // to ensure it covers full width, scale up by 1.1
          (Math.random() - 0.5) * window.innerHeight * 1.5,
          Math.random() * (STAR_Z_MAX - STAR_Z_MIN) + STAR_Z_MIN
        );

        vertices.push(position);
      }

      geometry.setFromPoints(vertices);
      applyStarColor();

      const points = new THREE.Points(
        geometry,
        new THREE.PointsMaterial({
          size: 3,
          transparent: true,
          vertexColors: true,
          opacity: 0.7,
        })
      );

      scene.add(points);
    };

    const applyStarColor = () => {
      const numVertices = geometry.attributes.position.count;

      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(
          new Float32Array(numVertices * 3).map(() => starColor.value),
          3
        )
      );
    };

    const animateStars = () => {
      const Y_THRESHOLD = window.innerHeight * 0.75;
      const vertices = geometry.attributes.position.array as number[];

      for (let i = 1; i < vertices.length; i += 3) {
        if (vertices[i] > Y_THRESHOLD) {
          vertices[i] = -Y_THRESHOLD;
          continue;
        }
        vertices[i] = vertices[i] + 0.2;
      }

      geometry.attributes.position.needsUpdate = true;
    };

    const render = () => {
      animateStars();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    let isRenderStarted = false;

    const onBodyAttributeChange = (e: MutationRecord[]) => {
      if (!e.find((f) => f.target === document.documentElement)) return;
      if (!geometry.attributes.position) return;

      const isDark = document.documentElement.classList.contains("dark");

      starColor.value = isDark ? DARK_STAR_COLOR : LIGHT_STAR_COLOR;
      applyStarColor();
    };

    const resizeObserver = ref<null | ResizeObserver>(null);
    const darkModeObserver = ref<null | MutationObserver>(null);

    onMounted(() => {
      setElement();
      resizeObserver.value = new ResizeObserver(() => {
        setCamera();
        setSpheres();
        if (!isRenderStarted) {
          isRenderStarted = true;
          render();
        }
      });
      resizeObserver.value.observe(document.documentElement);

      darkModeObserver.value = new MutationObserver((e) => {
        onBodyAttributeChange(e);
      });

      darkModeObserver.value.observe(document.documentElement, {
        attributes: true,
      });
    });

    onUnmounted(() => {
      resizeObserver.value?.disconnect();
    });

    return {
      threeContainer,
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

@variants dark {
  .radial {
    --color-shine: theme("colors.dark.300");
    --color-bg: theme("colors.dark.800");
  }
}
</style>
