
<script lang="ts">
import { defineComponent } from "vue";
import useProducts, { Product } from "../composables/products";
import { store } from "../store/index"
export default defineComponent({
  name: "HelloWorld",
  props: { msg: String },
  data() {
    return {
      products: [] as Product[],
      storeCount: store.state.counter
    }
  },

  methods: {
    addPropro() {

      this.products.push({ id: "", title: "lalalalala", description: "sqf", images: [], category: "God", variants: [], price: 3, tags: ['finish'] })
    },
    addGlobalState() {
      store.commit("increment");
    }
  },

  async setup() {
    const { products } = await useProducts();
    return { products };
  },
});
</script>


<template>
  <Suspense>
    {{ storeCount }}
    <button @click="addGlobalState">Add</button>
    <h1>{{ msg }}</h1>
    <h3>Products</h3>
    <button @click="addPropro">Do action</button>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
  </Suspense>
</template>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
