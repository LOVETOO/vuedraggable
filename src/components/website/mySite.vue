<template>
  <div class="my-site iui-container">
    <div class="site-box site-panel">
      <nav-site-bag></nav-site-bag>
    </div>
  </div>
</template>


<script>
import navSiteBag from "@/components/website/navSiteBag";

export default {
  components: {
    navSiteBag
  }
};
</script>


<style lang="scss" scoped>
.my-site {
  .site-box {
    border: 1px solid transparent;
    padding-top: 10px;
    position: relative;
  }
}
</style>