<template>
  <div class="fixed inset-0 pointer-events-none bg-flat">
    <canvas ref="el" class="h-screen w-screen opacity-20" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

type OIn = {
  x: number;
  y: number;
  s: number;
  dx: number;
  dy: number;
};
type OOut = {
  x: number;
  y: number;
  r: number;
  w: number;
  dx: number;
  dy: number;
  draw: (ctx: CanvasRenderingContext2D, t: number) => void;
};
type XIn = {
  x: number;
  y: number;
  s: number;
  dx: number;
  dy: number;
  r: number;
  dr: number;
};
type XOut = {
  x: number;
  y: number;
  r: number;
  w: number;
  dx: number;
  dy: number;
  dr: number;
  draw: (ctx: CanvasRenderingContext2D, t: number) => void;
};

export default defineComponent({
  name: "BgCanvas",
  setup() {
    const el = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      const canvas = el.value as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      const resize = () => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      };
      window.addEventListener("resize", resize);
      resize();

      const presets: {
        o: ({ x, y, s, dx, dy }: OIn) => OOut;
        x: ({ x, y, s, dx, dy, r, dr }: XIn) => XOut;
      } = {
        o: ({ x, y, s, dx, dy }) => {
          return {
            x: x,
            y: y,
            r: 12 * s,
            w: 5 * s,
            dx: dx,
            dy: dy,
            draw: function (ctx, t) {
              this.x += this.dx;
              this.y += this.dy;

              ctx.beginPath();
              ctx.arc(
                this.x + +Math.sin((50 + x + t / 10) / 100) * 3,
                this.y + +Math.sin((45 + x + t / 10) / 100) * 4,
                this.r,
                0,
                2 * Math.PI,
                false
              );
              ctx.lineWidth = this.w;
              ctx.strokeStyle = "#888";
              ctx.stroke();
            },
          };
        },
        x: ({ x, y, s, dx, dy, dr, r }) => {
          r = r || 0;

          const ff = {
            x: x,
            y: y,
            s: 20 * s,
            w: 5 * s,
            r: r,
            dx: dx,
            dy: dy,
            dr: dr,
            draw: function (ctx: CanvasRenderingContext2D, t: number) {
              this.x += this.dx;
              this.y += this.dy;
              this.r += this.dr;

              const line = (
                x: number,
                y: number,
                tx: number,
                ty: number,
                c: string,
                o?: number
              ) => {
                o = o || 0;
                ctx.beginPath();
                ctx.moveTo(-o + (this.s / 2) * x, o + (this.s / 2) * y);
                ctx.lineTo(-o + (this.s / 2) * tx, o + (this.s / 2) * ty);
                ctx.lineWidth = this.w;
                ctx.strokeStyle = c;
                ctx.stroke();
              };

              ctx.save();

              ctx.translate(
                this.x + Math.sin((x + t / 10) / 100) * 5,
                this.y + Math.sin((10 + x + t / 10) / 100) * 2
              );
              ctx.rotate((this.r * Math.PI) / 180);

              line(-1, -1, 1, 1, "#888");
              line(1, -1, -1, 1, "#888");

              ctx.restore();
            },
          };

          return ff;
        },
      };

      const elements: (OOut | XOut)[] = [];

      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          if (Math.round(Math.random() * 8000) == 1) {
            const s = (Math.random() * 5 + 1) / 10;
            if (Math.round(Math.random()) == 1)
              elements.push(presets.o({ x, y, s, dx: 0, dy: 0 }));
            else
              elements.push(
                presets.x({
                  x,
                  y,
                  s,
                  dx: 0,
                  dy: 0,
                  r: (Math.random() * 3 - 1) / 10,
                  dr: Math.random() * 360,
                })
              );
          }
        }
      }

      setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const time = new Date().getTime();
        for (const e in elements) elements[e].draw(ctx, time);
      }, 10);
    });

    return { el };
  },
});
</script>

<style lang="less" scoped>
.fixed {
  z-index: -1;
  // background-color: blue;
}
</style>
