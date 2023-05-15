new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "SPECVLVM VRENS",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/61118a0aa48b5e580e96b19a/1656069748929/%2716+Nic+Vor.mp3",
          url: "https://www.youtube.com/watch?v=sE4HixW2D3A",
          favorited: false
        },
        {
          name: "VINO TAPATIAS",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce133c9f12ce39da677ed3/1628420846786/Vino+Tapatia.mp3",
          url: "https://www.youtube.com/watch?v=SftaN_q3Saw",
          favorited: false
        },
        {
          name: "03",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce13582a1ec1090d275794/1635583890408/Bailey+Jane+%28stripped%29.mp3",
          url: "https://www.youtube.com/watch?v=SftaN_q3Saw",
          favorited: true
        },
        {
          name: "04",
          artist: "MISTA_MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce1469973a5f58939f484b/1628420911133/fufufufu.m4a",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "05",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce13d1efd30f5bde7ec8fc/1628420969063/Rachael+McLoughlin+.m4a",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: false
        },
        {
          name: "06",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1644582508249-LDXLVV3ID8A3IQ1BTRUS/011722+Game+Format+w+droid+transmission+.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce2279cde909003d1f169c/1628420936338/sherri+mono+bass.m4a",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "07",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce1469973a5f58939f484b/1628420911133/fufufufu.m4a",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: false
        },
        {
          name: "08",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce136010e44051672f37b7/1628420867282/Rain+Dancefinal.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "09",
          artist: "MISTA MAGU",
          cover: "https://images.squarespace-cdn.com/content/v1/5445d1f8e4b0fd2c9e12bb2d/1683249671145-11X9AWOXBT5S1EO41RFO/tv_ratings_256.png",
          source: "https://static1.squarespace.com/static/5445d1f8e4b0fd2c9e12bb2d/60ce12aa76779764700d0d35/60ce22c884df6c45411a2f03/1628420942138/Bustin+Geeber+Instr..m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
