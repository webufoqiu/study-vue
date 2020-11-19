<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <CourseList :courses="courses"></CourseList>
</template>

<script>


import CourseList from "@/components/CourseList.vue";
import { getCourses } from "@/api/course";


export default {
  name: "App",
  components: {
     CourseList,
 
  },
  data() {
    return {
      title1: "购物车111111111111",
      title2: "购物车222222222222",
      course: "",
      courses: [],
      price: 0,
    };
  },
  async created() {
    const courses = await getCourses();
    this.courses = courses;
    // 批量更新商品价格
    // this.batchUpdate();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.xx {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
