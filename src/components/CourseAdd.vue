<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="onInput"
      v-on:keydown.enter="addCourse"
    />
    <button @click="addCourse">ADD</button>{{ value }}
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    addCourse(e) {
      this.$emit("myevent",e.target.value);
      console.log("增加课程");
    },
    onInput(e) {
      this.$emit("input", e.target.value);
      console.log("传回数据",e.target.value);
    },
  },
};
</script>

<style scoped>
</style>