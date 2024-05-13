<template>
  <div>
    <v-btn color="success" @click="display()">show</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    display() {
      alert("Display Function Alert");
    },
  },
};
</script>

<style></style>
