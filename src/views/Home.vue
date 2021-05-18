<template>
  <div class="home space-y-8">
    <Hero />
    <div class="container mx-auto">
      <article class="intro space-y-4 dark:text-gray-200">
        <h4 class="text-4xl dark:text-white">Hello.</h4>
        <p>Welcome to my portfolio.</p>
        <p>
          Earum alias velit in. Culpa ut quae et voluptatem quo blanditiis ad
          ex. Sit praesentium repudiandae ipsum consequatur pariatur dolorem id
          magnam. Nihil consequatur asperiores autem qui.
        </p>
        <p>
          Explicabo sapiente mollitia dolore consequatur. Reiciendis earum
          minima nihil similique ea qui. Quia et adipisci voluptate iste qui
          consequatur quae ratione. Ut inventore corporis repudiandae dolorem
          aliquid eligendi. Ad quisquam rerum harum magni hic delectus. A aut
          culpa eos assumenda.
        </p>
        <p>
          Quam aliquam eum esse dolores. Quis ab officia cum voluptatem. Error
          cupiditate possimus ea et quasi. Laborum sit ab quis.
        </p>
        <p>
          Optio nisi voluptates minima quas nihil quo non. At beatae et et
          ratione illo aut vel. In est enim quis voluptate exercitationem
          assumenda quidem placeat. Est in eos et voluptatibus dolores quia
          soluta sint. Omnis alias soluta et eveniet recusandae debitis minus.
        </p>
        <p>
          Ut sequi est eum nisi quo explicabo sed. Aut quis quis accusamus
          dolores. Et repellat eos doloribus. Rerum et consequuntur consequatur
          omnis expedita repellendus repellendus quo.
        </p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue";

export default defineComponent({
  name: "Home",
  components: { Hero },
});
</script>

<style lang="less" scoped></style>
