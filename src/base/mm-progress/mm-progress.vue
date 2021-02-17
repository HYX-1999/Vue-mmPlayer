<template>
  <!--进度条拖动-->
  <div ref="mmProgress" class="mmProgress" @click="barClick">
    <div class="mmProgress-bar"></div>
    <div ref="mmPercentProgress" class="mmProgress-outer"></div>
    <div ref="mmProgressInner" class="mmProgress-inner">
      <div
        class="mmProgress-dot"
        @mousedown="barDown"
        @touchstart.prevent="barDown"
      ></div>
    </div>
  </div>
</template>

<script>
const dotWidth = 10
export default {
  name: 'MmProgress',
  props: {
    percent: {
      type: [Number],
      default: 0
    },
    percentProgress: {
      type: [Number],
      default: 0
    }
  },
  data() {
    return {
      move: {
        status: false, //是否可拖动
        statusX: 0, //记录最开始点击的X坐标
        left: 0 //记录当前已经移动的距离
      }
    }
  },
  methods: {
    barClick() {
      console.log("进度条")
    },
    barDown() {
      console.log(dotWidth)
    }
  }
}
</script>

<style lang="scss" scoped>
.mmProgress {
  position: relative;
  padding: 5px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  .mmProgress-bar {
    height: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
  }
  .mmProgress-outer {
    position: absolute;
    top: 50%;
    left: 5px;
    display: inline-block;
    width: 0;
    height: 2px;
    margin-top: -1px;
    background: rgba(255, 255, 255, 0.2);
  }
  .mmProgress-inner {
    position: absolute;
    top: 50%;
    left: 5px;
    display: inline-block;
    width: 0;
    height: 2px;
    margin-top: -1px;
    background: #fff;
    .mmProgress-dot {
      position: absolute;
      top: 50%;
      right: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      transform: translateY(-50%);
    }
  }
}
</style>