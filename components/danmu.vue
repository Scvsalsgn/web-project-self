<template>
  <view>
    
    <div class="danmu-board">
      <div v-for="(danmu, index) in danmus" :key="index" :class="['danmu-item']" :style="getDanmuStyle(index)">
        {{ danmu }}
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        danmus: ['骑楼老街好玩', '白沙门也不错', '运气好能碰到超好看的晚霞', '海口真是个值得一去的地方'], // infomation of danmu
      };
    },
    methods: {
      getDanmuStyle(index) {
        const top = Math.random() * 90; // random top position
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // random color
        const animationDelay = `${Math.random() * 3}s`; // random animation delay
        const animationDuration = `${8 + Math.random() * 5}s`; // random animation duration

        return {
          top: `${top}%`,
          color: color,
          animationDelay: animationDelay,
          animationDuration: animationDuration,
          transform: 'translateX(100%)', // init position of danmu is right
        };
      },
    },
  };
</script>

<style lang="scss">
.danmu-board {
  position: relative;
  width: 1440px;
  // width: 500px;
  // height: 300px; 
  height: 600px;
  border-radius: 20px; 
  background-image: url("https://ts1.cn.mm.bing.net/th/id/R-C.d07816d313cad5d2b53b30192443c4c5?rik=SUozltQgAs8%2bNQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10119%2f600%2fw1920h1080%2f20190325%2f6449-hutwezf3366892.jpg&ehk=DH2hT8Ey9e3gfn%2fUBKrQFjRb3LPXUs9sEIOq4LRDZfQ%3d&risl=&pid=ImgRaw&r=0");
  overflow: hidden;
}

.danmu-item {
  position: absolute;
  white-space: nowrap;
  animation: moveLeft 8.5s linear infinite;
  font-size: 15px;
  
  background-color: rgba(255, 255, 255, 0.7); 
  border: 1px solid #ccc;
  border-radius: 20px; 
  padding: 5px 15px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /*shadow effect*/ 
}

@keyframes moveLeft {
  from {
    left: 100%;
  }
  to {
    left: -100%;
  }
}
</style>
