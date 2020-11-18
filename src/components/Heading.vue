<template>
   
        <div level="3" :title="title" icon="cart">
            {{title}}
        </div> 
</template>

<script>

export default {
  props: {
    level: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
    },
  },

  render(h) {
    // 子节点数组
    let children = [];
    // icon属性的额判断
    if (this.icon) {
      // <svg class="xx"><use xlink:href="#"</svg>
      children.push(
        h(
          "svg",
          { class: "xx" },
          // 子节点是个数组，继续h()
          [h("use", { attrs: { "xlink:href": "#icon-" + this.icon } })]
        )
      );
    }
    // 拼接
    children = children.concat(this.$slots.default);
    const vnode1 = h(
      "h" + this.level, //参数1，tagname
      { attrs: { title: this.title + "okok" } }, //参数2，{。。。}
      children //参数3，子节点的数组
    );
    // snabbdom
    console.log(vnode1);
    // h就是createElemenet,返回h返回的vnode
    return vnode1;
  },
};
</script>

<style scoped>
</style>