<template>
  <div id="app">
    <mm-header />
    <router-view class="router-view" />
    <audio ref="mmPlayer" controls="controls" src="./assets/music/精忠报国.mp3"></audio>
  </div>
</template>
<script>
import './styles/variable.scss'
import MmHeader from './components/music-header/mm-header'
export default {
  name: 'App',
  components: { 
    MmHeader 
  },
  created() {
    this.$nextTick(() => {
      console.log(this.$refs.mmPlayer)
    })
  }
}
</script>
<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  .router-view {
    width: 100%;
    height: 100%;
  }
  audio {
    position: fixed;
  }
}
</style>
