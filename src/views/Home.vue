<template>
  <div class="home">
    <div class="music-content">
      <div class="music-left">
        <music-btn></music-btn>
      </div>
    </div>

    <!-- 播放器 -->
    <div
      class="music-bar"
    >
      <div class="music-bar-btns">
        <mm-icon
          class="pointer"
          type="prev"
          :size="36"
          title="上一曲 Ctrl + Left"
          @click="prev"
        />
        <div
          class="control-play pointer"
          title="播放暂停 Ctrl + Space"
          @click="play"
        >
          <mm-icon :type="playing ? 'pause' : 'play'" :size="24" />
        </div>
        <mm-icon
          class="pointer"
          type="next"
          :size="36"
          title="下一曲 Ctrl + Right"
          @click="next"
        />
      </div>
      <div class="music-music">
        <div class="music-bar-info">
          <template>欢迎使用musicPlayer在线音乐播放器</template>
        </div>
        <mm-progress
          class="music-progress"
        />
      </div>

      <!-- 播放模式 -->
      <mm-icon
        class="icon-color pointer mode"
        type="mode"
        :size="30"
        @click="modeChange"
      />

      <!-- 音量控制 -->
      <div class="music-bar-volume" title="音量加减 [Ctrl + Up / Down]">
        <volume :volume="volume" @volumeChange="volumeChange" />
      </div>

      <!-- 遮罩 -->
      <div class="mmPlayer-bg" :style="{ backgroundImage: picUrl }"></div>
      <div class="mmPlayer-mask"></div>
    </div>
  </div>
</template>

<script>
import MmIcon from '../base/mm-icon/mm-icon.vue'
import MmProgress from '../base/mm-progress/mm-progress.vue'
import Volume from '../components/volume/volume'
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import MusicBtn from '../components/music-btn/music-btn'
import { defaultBG } from '../config'
export default {
  name: "Home",
  components: {
    // HelloWorld
    MusicBtn,
    MmIcon,
    MmProgress,
    Volume
  },
  data() {
    return {
      playing: 'pause',
      picUrl: '',
      volume: 0
    }
  },
  computed: {
    picUrl() {
      return this.currentMusic.id && this.currentMusic.image
        ? `url(${this.currentMusic.image}?param=300y300)`
        : `url(${defaultBG})`
    },
  },
  watch: {

  },
  mounted() {
    this.$nextTick(() => {
      this.initKeyDown()
    })
  },
  methods: {
    initKeyDown() {
      document.onkeydown = e => {
        switch(e.ctrlKey && e.keyCode) {
          case 32: // 播放暂停Ctrl + Space
            this.play()
            break
          case 37: // 上一曲Ctrl + Left
            this.prev()
            break
          case 38: // 音量加Ctrl + Up
            {let plus = Number((this.volume += 0.1).toFixed(1))
            if (plus > 1) {
              plus = 1
            }
            this.volumeChange(plus)}
            break
          case 39: // 下一曲Ctrl + Right
            this.next()
            break
          case 40: // 音量减Ctrl + Down
            {let reduce = Number((this.volume -= 0.1).toFixed(1))
            if (reduce < 0) {
              reduce = 0
            }
            this.volumeChange(reduce)}
            break
          case 79: // 切换播放模式Ctrl + O
            this.modeChange()
            break
        }
      }
    },
    //上一曲
    prev() {
      console.log("上一曲")
    },
    //播放暂停
    play() {
      console.log("播放暂停")
    },
    //下一曲
    next() {
      console.log("下一曲")
    },
    //播放模式
    modeChange() {
      console.log("播放模式")
    },

    //音量控制
    volumeChange() {
      console.log(this.volume)
    }
  }
};
</script>
<style lang="scss">
.home {
  padding: 75px 25px 25px 25px;
  width: 100%;
  max-width: 1750px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .music-content {
    display: flex;
    width: 100%;
    height: calc('100% - 80px');
    .music-left {
      flex: 1;
      height: 100%;
      overflow: hidden;
    }
  }
  .music-bar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding-bottom: 15px;
    color: #fff;
    &.disabled {
      pointer-events: none;
      opacity: 0.6;
    }
    .icon-color {
      color: #fff;
    }
    .music-bar-btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 180px;
    }
    .music-music {
      position: relative;
      width: 100%;
      flex: 1;
      box-sizing: border-box;
      padding-left: 40px;
      font-size: 12px;
      color: #fff;
      .music-bar-info {
        height: 15px;
        padding-right: 80px;
        line-height: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
    .music-bar-volume {
      margin-left: 20px;
    }
  }
  /*遮罩*/
  .mmPlayer-mask,
  .mmPlayer-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .mmPlayer-mask {
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .mmPlayer-bg {
    z-index: -2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(12px);
    opacity: 0.7;
    transition: all 0.8s;
    transform: scale(1.1);
  }
}
</style>
