<template>
  <div id="iui_vue">
      <div>
        <my-site></my-site>
        <div class="cat-bags clear iui-container">
          <div class="main">
            <site-bags></site-bags>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import mySite from "@/components/website/mySite";
import siteBags from "@/components/sitebags/siteBags";

export default {
  components: {
    mySite,
    siteBags
  }
};
</script>

<style lang="scss" scoped>
#iui_vue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
  .page-switch {
    margin-bottom: 15px;
    text-align: left;
  }
  .cat-bags {
    margin-top: 15px;
    .main {
      width: 815px;
      float: left;
    }
  }
}
</style>
