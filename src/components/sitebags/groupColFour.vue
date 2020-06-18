<template>
  <div class="colFour clear">
    <draggable
      :group="{ name:'cat', put:$store.state.canMove }"
      :sort="$store.state.canMove"
      :scroll="true"
      :animation="150"
      :disabled="$store.state.catDragDisabled"
      handle=".group-head"
      ghost-class="sortable-ghost"
      chosen-class="sortable-chosen"
      v-model="$store.state.catLists"
      @start="catMoveStart"
      @end="catMoveEnd"
    >
      <div v-for="(catItem,index) in $store.state.catLists" :key="index" class="group site-panel line-opacity">
        <div class="group-inner">
          <div class="group-head clear">
            <h3>{{ catItem.name }}</h3>
          </div>
          <draggable
            :group="{ name:'site', put:$store.state.canMove }"
            :sort="$store.state.canMove"
            :scroll="true"
            :animation="150"
            :disabled="$store.state.catSiteDragDisabled"
            tag="div"
            ghost-class="sortable-ghost"
            chosen-class="sortable-chosen"
            class="layout-lists colFour"
            v-model="catItem.siteList"
            @start="moveStart"
            @end="moveEnd"
          >
            <div class="site-item hover-bg" v-for="(item,index) in catItem.siteList" :key="index">
              <a href="javascript:void(0)">
                <h4 class="ellipsis">{{ item.name }}</h4>
              </a>
            </div>
          </draggable>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { dragBag } from "@/components/mixins/dragBag";

export default {
  mixins: [dragBag],
  components: {
    draggable
  }
};
</script>

<style lang="scss" scoped>
.colFour {
  background-color: #f6f6f6;
  .group {
    margin: 0 11px 11px 0;
    padding: 0 15px;
    position: relative;
    user-select: none;
    box-sizing: border-box;
    float: left;
    width: 195px;
    height: 250px;
    &:nth-child(4n) {
      margin-right: 0;
    }
    .group-inner{
      height: 250px;
      min-height: 250px;
      &:hover{
        height: auto;
      }
    }
  }
}
</style>