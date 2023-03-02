<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.thumbnail" class="card-img-top" :alt="product.title">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        this.products = data.products;
      });
  }
};
</script>

<style>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>