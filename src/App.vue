<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CourseAdd v-model="course" key="course" @myevent="addCourse"></CourseAdd>
  <CourseList :courses="courses"></CourseList>
</template>

<script>
import CourseList from "@/components/CourseList.vue";
import { getCourses } from "@/api/course";
import CourseAdd from  "@/components/CourseAdd.vue"
export default {
  name: "App",
  components: {
    CourseList,
    CourseAdd
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
      this.courses.push(this.course);
      console.log(this.course);
      this.course = "";
    },
  }
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
