<template>
  <div id="pagination-container">
    <div
      class="page-number"
      :class="{ 'current': (currentPage === number) }"
      @click="selectPage(number)"
      v-for="number in numbers"
      :key="`${number}-p`"
    >{{(number + 1)}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numbers: [],
    };
  },
  props: {
    limit: {
      type: Number,
      required: true,
    },
    totalLength: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    selectPage(number) {
      this.$emit('goToPage', number);
    },
  },
  mounted() {
    for (let a = 0; a < this.totalLength; a += this.limit) {
      this.numbers.push(a);
    }
  },
};
</script>
<style scoped>
#pagination-container {
  display: flex;
  margin: auto;
  justify-content: space-between;
  max-width: 800px;
  padding: 40px 0;
}
.page-number {
  width: 20px;
  height: 20px;
  background-color: black;
  cursor: pointer;
  color: white;
  font-size: 8px;
}
.current {
  background-color: orange;
  color: black;
  font-weight: 600;
}
</style>
