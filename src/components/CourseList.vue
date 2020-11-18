<template>
  <div>
    <p v-if="courses.length === 0">当前没有任何相关课程</p>
    <div v-else>
      <transition-group name="fade">
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
      </transition-group>
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
      default: [],
    },
  },
  //    局部方式定义过滤器
  filters: {
    currency(value, symbol = "￥") {
      return symbol + " " + value;
    },
  },
};
</script>

<style scoped>
  .active {
            background-color: darkgray;
        }
</style>