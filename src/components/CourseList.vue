<template>
  <div>
    <p v-if="courses.length === 0">当前没有任何相关课程</p>
    <div v-else>
      <div
          v-for="c in courses"
          :key="c.name"
          :style="{
            backgroundColor: selectedCourse === c ? '#ddd' : 'transparent',
          }"
          @click="selectedCourse = c"
        >
          {{ c.name }}----{{ c.price }}
      </div>
   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: "", //当前选中的课程，去确定对应样式是否被渲染
    };
  },
  props: {
    courses: {
      type: Array,
      default: function(){return []},
    },
},

};
</script>

<style scoped>
.active {
  background-color: darkgray;
}
</style>