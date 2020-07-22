<template>
  <div id="app" @click.once="musicPlay">
    <!-- router-view -->
    <router-view class="view pa w100"/>
    <!-- music -->
    <div class="music pf z7">
      <audio ref="music" src="static/audio/music.mp3" autoplay="autoplay" loop></audio>
      <img class="icon play" v-if="musicImg" @click="musicPause" src="static/img/menu/play.png" alt="">
      <img class="icon stop" v-else @click="musicPlay" src="static/img/menu/stop.png" alt="">
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        musicImg: true
      };
    },
    methods: {
      musicPause() {
        this.musicImg = false;
        this.$refs.music.pause();
      },
      musicPlay() {
        this.musicImg = true;
        this.$refs.music.play();
      }
    }
  };
</script>
