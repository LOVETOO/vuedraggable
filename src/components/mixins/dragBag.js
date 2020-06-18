
export const dragBag = {
  methods: {

    // 分类拖拽
    catMoveStart() {
      if (!this.$store.state.canMove) return;
      this.$store.commit("setStateStatus", { catSiteDragDisabled:true });
    },

    // 分类拖拽结束
    catMoveEnd(){
      if (!this.$store.state.canMove) return;
      this.$store.commit("setStateStatus", { catSiteDragDisabled:false });
    },

    // 拖动
    moveStart() {
      if (!this.$store.state.canMove) return;
      this.$store.commit("setStateStatus", { catDragDisabled:true });
    },
    moveEnd(){
      if (!this.$store.state.canMove) return;
      this.$store.commit("setStateStatus", { catDragDisabled:false });
    }

  }
}

