<script setup lang="ts">
import * as THREE from "three";
import { onMounted, onUnmounted, ref } from "vue";

const STAR_DENSITY = 0.0002;
const CAMERA_FOV = 60;
const CAMERA_NEAR_LIMIT = 1;
const CAMERA_FAR_LIMIT = 1000;
const STAR_Z_MIN = 500;
const STAR_Z_MAX = 1000;
const LIGHT_STAR_COLOR = 0x000000;
const DARK_STAR_COLOR = 0xffffff;
const STAR_ATTRIBUTE_NUM = 3;
const PX_DY_PER_REFRESH = 0.2;
const RAND_HALF = 0.5;
const COVER_SCALE_FACTOR = 1.5;
const WINDOW_HEIGHT_YSCALE = 0.75;

const threeContainer = ref<null | HTMLDivElement>(null);
const starColor = ref<number>(DARK_STAR_COLOR);

const camera = new THREE.PerspectiveCamera(
  CAMERA_FOV,
  window.innerWidth / window.innerHeight,
  CAMERA_NEAR_LIMIT,
  CAMERA_FAR_LIMIT,
);
const geometry = new THREE.BufferGeometry();
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });

camera.lookAt(0, 0, CAMERA_FAR_LIMIT);

const getStarCount = (): number => {
  return Math.floor(window.innerWidth * window.innerHeight * STAR_DENSITY);
};

const setElement = (): void => {
  if (threeContainer.value === null) return;
  threeContainer.value.replaceChildren(renderer.domElement);
};

const setCamera = (): void => {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

const applyStarColor = (): void => {
  const position = geometry.getAttribute("position");
  if (position === undefined) return;
  const numVertices = position.count;

  geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(
      new Float32Array(numVertices * STAR_ATTRIBUTE_NUM).map(
        () => starColor.value,
      ),
      STAR_ATTRIBUTE_NUM,
    ),
  );
};

const setSpheres = (): void => {
  scene.clear();
  const starCount = getStarCount();
  const vertices: THREE.Vector3[] = [];

  for (let i = 0; i < starCount; i++) {
    // to ensure it covers full width, scale up by COVER_SCALE_FACTOR
    const position = new THREE.Vector3(
      (Math.random() - RAND_HALF) * window.innerWidth * COVER_SCALE_FACTOR,
      (Math.random() - RAND_HALF) * window.innerHeight * COVER_SCALE_FACTOR,
      Math.random() * (STAR_Z_MAX - STAR_Z_MIN) + STAR_Z_MIN,
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
    }),
  );

  scene.add(points);
};

const animateStars = (): void => {
  const position = geometry.getAttribute("position");
  if (position === undefined) return;
  const Y_THRESHOLD = window.innerHeight * WINDOW_HEIGHT_YSCALE;

  for (let i = 1; i < position.count; i++) {
    const vertex = position.getY(i);
    if (vertex > Y_THRESHOLD) {
      position.setY(i, -Y_THRESHOLD);
      continue;
    }
    position.setY(i, vertex + PX_DY_PER_REFRESH);
  }

  position.needsUpdate = true;
};

const render = (): void => {
  animateStars();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

let isRenderStarted = false;

const onBodyAttributeChange = (e: MutationRecord[]): void => {
  if (e.find((f) => f.target === document.documentElement) === null) return;

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

onUnmounted(() => resizeObserver.value?.disconnect());
</script>

<template>
  <div class="fixed inset-0 pointer-events-none ps-bg-flat">
    <div class="fixed inset-0 radial" />
    <div ref="threeContainer" />
  </div>
</template>

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
