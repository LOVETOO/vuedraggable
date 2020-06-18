<template>
  <div class="site-bag clear">
    <draggable
      :group="{ name:'site', put:$store.state.canMove }"
      :scroll="true"
      :animation="150"
      :sort="$store.state.canMove"
      :disabled="$store.state.catSiteDragDisabled"
      ghost-class="sortable-ghost"
      chosen-class="sortable-chosen"
      v-model="$store.state.navLists"
      @start="moveStart"
      @end="moveEnd"
    >
      <div class="site-item" v-for="(item,index) in $store.state.navLists" :key="index">
        <a href="javascript:void(0)">
          <h4 class="ellipsis">{{ item.name }}</h4>
        </a>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { dragBag } from "@/components/mixins/dragBag";

export default {
  name: "navSiteBag",
  components: {
    draggable
  },
  mixins: [dragBag]
};
</script>

<style lang="scss" scoped>
</style>