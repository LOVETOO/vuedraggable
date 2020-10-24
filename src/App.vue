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
    <div class="footer">
      主题：
      <a target="_blank" href="http://lovetoo.iaiui.com/">LOVETOO</a>
      <a target="_blank" href="http://only.iui.one/">ONLY</a>
    </div>
  </div>
</template>

<script>
import mySite from "@/components/website/mySite";
import siteBags from "@/components/sitebags/siteBags";

export default {
  components: {
    mySite,
    siteBags,
  },
};
</script>

<style lang="scss" scoped>
#iui_vue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 15px;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
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
  .footer {
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    a {
      margin-right: 15px;
    }
  }
}
</style>
