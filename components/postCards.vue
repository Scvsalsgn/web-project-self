<!-- Card.vue -->
<template>
  <div class="card">
    <img :src="post.image1" alt="Post Image" class="card-image" />
    <div class="card-content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 8px;
  /* height: 300px; */
  width: 350px;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

h3 {
  margin: 0 0 8px;
}

p {
  color: #666;
}
</style>
