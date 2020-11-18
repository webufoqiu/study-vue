<template>
  <div>
    <p>
      <input
        type="text"
        :value="val"
        @change="$emit('change',$event.target.value)"
        />
         <button @click="addCourse">新增</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value : String
  },

  methods: {
    addCourse() {
      // 派发事件通知父组件新增课程
      this.$emit("add-course");
    },
    // onInput(e) {
    //   this.$emit("input", e.target.value);
    // }
  }
  
}
</script>

<style  >

</style>