<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CourseAdd  v-model="course"  @add-course="addCourse"></CourseAdd>
  <CourseList :courses="courses"></CourseList>
</template>

<script>
import CourseList from "@/components/CourseList.vue";
import CourseAdd from "@/components/CourseAdd.vue";
import { getCourses } from "@/api/course.js";

export default {
  name: "App",
  components: {
    CourseList,
    CourseAdd,
  },
  data() {
    return {
      course: "",
      courses: [],
      price: 0,
    };
  },
  async created() {
    const courses = await getCourses();
    this.courses = courses;
  },
  methods: {
    addCourse() {
      if (this.course) {
        // 添加course到数组
        this.courses.push({ name: this.course });
        this.course = "";

        // 显示提示信息
        // this.show = true
        // this.$refs.msgSuccess.toggle();
      } else {
        // 显示错误信息
        // this.showWarn = true
        // this.$refs.msgWarning.toggle();
      }
    },
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
