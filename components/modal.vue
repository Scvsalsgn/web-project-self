<!-- Modal.vue -->
<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <slot></slot> <!-- slot for content -->
      <!-- <button @click="closeModal">Close</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /*make sure it's on top */
}

.modal-content {
  background-color: white;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 8px;
  /* width: 300px; */
  /* max-width: 80%; */
  width: 70%;
  height: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
