<template>
  <view>
    <!-- 弹幕区域 -->
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
        danmus: ['骑楼老街好玩', '白沙门也不错', '运气好能碰到超好看的晚霞', '海口真是个值得一去的地方'], // 弹幕信息数组
      };
    },
    methods: {
      getDanmuStyle(index) {
        // 随机生成弹幕的初始样式，包括不同的高度和颜色
        const top = Math.random() * 90; // 随机顶部位置
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // 随机颜色
        const animationDelay = `${Math.random() * 3}s`; // 随机延迟 0-3 秒
        const animationDuration = `${8 + Math.random() * 5}s`; // 随机动画时间 8-13 秒

        return {
          top: `${top}%`,
          color: color,
          animationDelay: animationDelay,
          animationDuration: animationDuration,
          transform: 'translateX(100%)', // 初始位置在屏幕右边
        };
      },
    },
  };
</script>

<style lang="scss">
.danmu-board {
  position: relative;
  // width: 100%;
  // width: 30%;
  width: 1440px;
  // width: 500px;
  // height: 300px; /* 根据需求设定高度 */
  height: 600px;
  border-radius: 20px; /* 气泡框圆角 */
  background-image: url("https://ts1.cn.mm.bing.net/th/id/R-C.d07816d313cad5d2b53b30192443c4c5?rik=SUozltQgAs8%2bNQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10119%2f600%2fw1920h1080%2f20190325%2f6449-hutwezf3366892.jpg&ehk=DH2hT8Ey9e3gfn%2fUBKrQFjRb3LPXUs9sEIOq4LRDZfQ%3d&risl=&pid=ImgRaw&r=0");
  overflow: hidden;
}

.danmu-item {
  position: absolute;
  white-space: nowrap;
  animation: moveLeft 8.5s linear infinite;
  font-size: 15px; /* 可根据需求调整字体大小 */
  
  background-color: rgba(255, 255, 255, 0.7); /* 气泡框背景颜色，透明度为 0.7 */
  border: 1px solid #ccc; /* 气泡框边框颜色 */
  border-radius: 20px; /* 气泡框圆角 */
  padding: 5px 15px; /* 气泡框内边距 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 气泡框阴影效果 */
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
