<template>
  <header class="mm-header">
    <h1 class="header">
      <a href="https://github.com/HYX-1999/music-player" target="_blank">在线音乐播放器</a>
    </h1>
    <dl class="user">
      <dd class="user-btn">登录</dd>
    </dl>
  </header>
</template>

<script>
export default {
  name: "MmHeader",
  components: {

  }
}
</script>

<style lang="scss" scoped>
.mm-header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  .header {
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 18px;
  }
  .user {
    position: absolute;
    top: 50%;
    right: 15px;
    line-height: 30px;
    text-align: right;
    transform: translateY(-50%);
    .user-btn {
      color: #fff;
      cursor: pointer;
      &:hover {
        color: crimson;
      }
    }
  }
}
</style>