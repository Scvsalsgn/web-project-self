<template>
  <view>

    <NavBar></NavBar>

    <div class="backgroud-container">
    <div class="container" style="display: flex;justify-content: center;height: 300px;width: 100%;">
    
    <danmu-vue></danmu-vue>
    <!-- <danmu-vue style="width: 40%;height: 400px;margin-left: 8%;"></danmu-vue> -->
    </div>
      <postListVue @post-selected="handlePostSelected" ref="postList"></postListVue>
      
      <div class="modal-container" >
      <modalVue :show="this.showModal" @close="this.showModal=false">
        <!-- 在弹窗中展示选中的 post 数据 -->
                <div v-if="selectedPost" style="display: flex;flex-direction: row;">

                 
    


    <div class="container" style="width: 1500px;height: 100%;">
    <!-- Bootstrap Carousel 轮播图 -->
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style="margin-top: calc(50% - 200px);">
      <!-- 轮播图指示器 -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      
      <!-- 轮播图项目 -->
      <div class="carousel-inner" >
        <!-- 第一张幻灯片 -->
        <div class="carousel-item active">
          <img :src="selectedPost.image1" class="d-block w-100" alt="Image 1" style="object-fit: contain;width:100%;">
        </div>
        <!-- 第二张幻灯片 -->
        <div class="carousel-item">
          <img :src="selectedPost.image2" class="d-block w-100" alt="Image 2" style="object-fit: contain;width:100%;">
        </div>
      </div>
      
      <!-- 上一张和下一张控制 -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
                  
                  
                  <div class="content-container" style="width: 1100px;border-left: 1px solid gainsboro;">
                    <div class="author" style="display: flex; flex-direction:row;margin-left: 6%;margin-top: 2%;border-bottom:1px gainsboro solid;">
                      <img src="../../static/my_icon.png" alt="" style="height: 50px;width: 50px;"/>
                      <text style="align-self: center;margin-left: 10px;font-size: 18px;color: dimgray;">用户名</text>
                    </div>
                    

                    <div class="scroll_item">
                  <h2 style="margin-left: 8%;margin-top: 12%;">{{ selectedPost.title }}</h2>
                  <p style="margin-left: 8%;margin-top: 7px;">{{ selectedPost.description }}</p>
                  
                  
                  <h5 style="margin-left: 2%;margin-top: 20px;border-top: 1px solid gainsboro;padding-top: 10px;font-weight: bold;">{{ selectedPost.comments.length }} comments in total</h5>
                  <comments_cardsVue :comments="selectedPost.comments" @delete-comment="handleDeleteComment"></comments_cardsVue>

                </div>

                  <div class="comment_cards_input" style="position: absolute;bottom:50px;width: 450px;display: flex;flex-direction:row;height: 50px;;">
                    <input class="form-control" aria-label="With textarea" placeholder="     Please input your comment" v-model="content" style="width: 100%;height: 40px;padding: 0;border-radius: 30px;">
                      <button class="btn btn-outline-secondary btn-primary" type="button" @click="submitClick()" style="height: 40px;border-radius: 20px;margin-left: 5px;color: white;">send</button>
                  </div>
                  
                  </div>
                  
                </div>
                <!-- <comments_cardsVue :comments="selectedPost.comments" @delete-comment="handleDeleteComment"></comments_cardsVue> -->
      </modalVue>
      </div>
      
  </div>

      <AppFooter></AppFooter>

  </view>
</template>

<script>
  import danmuVue from '../../components/danmu.vue';
  import postListVue from '../../components/postList.vue';
  import modalVue from '../../components/modal.vue';
  import comments_cardsVue from '../../components/comments_cards.vue';
  import NavBar from '../../components/NavBar.vue';
  import AppFooter from '../../components/AppFooter.vue';
  export default {
    components:{
      danmuVue,
      postListVue,
      modalVue,
      comments_cardsVue,
      NavBar,
      AppFooter
    },
    data() {
      return {
        showModal:false,
        selectedPost:null,
        content:''
      };
    },
    methods:{
      submitClick(){
        const name = '我'
      const content = this.content
      // 1、检查输入的合法性
      if (!name || !content) {
        alert('姓名或内容不能为空！')
        return
      }
      // 2、根据输入的数据，封装成一个comment对象
      const comment = {
        name,
        content
      }
      console.log(comment,"comment in AddVue")
      // 3、添加到comments中
      this.addComment(comment)
      // 4、清空输入框
      this.name = ''
      this.content = ''
      this.$nextTick(() => {
      console.log("评论已提交，并已清空输入框", this.name, this.content);
    });
      },
      addComment (comment) {
        if (this.selectedPost && this.selectedPost.comments) {
    this.selectedPost.comments.unshift(comment); // 使用 unshift 添加评论到开头
  } else {
    console.error('selectedPost or comments is undefined');
  }
    },

      handlePostSelected(post) {
            this.selectedPost = post; // 接收到选中的 post 数据
            //这是引用，所以会自动更新
            this.showModal = true;
          },
      // handleDeleteComment(index){
      //   this.$refs.postList.deleteComment(this.selectedPost.id,index);
      // }
      handleDeleteComment(index) {
    try {
      if (this.selectedPost && this.selectedPost.comments) {
        this.selectedPost.comments.splice(index, 1);  // 删除操作
      }
    } catch (error) {
      console.warn('Error caught: ', error);  // 可以记录错误或完全忽略
    }
  }
    }
  }
</script>

<style lang="scss">
.backgroud-container{
   // background-image: url('/static/bg1.jpg');
     background-size: cover; /* 背景图覆盖整个页面 */
     background-position: center; /* 背景图居中 */
     background-repeat: no-repeat; /* 防止背景图重复 */
     width: 100vw; /* 宽度设置为视口宽度 */
     height: 100vh; /* 高度设置为视口高度 */
     // display: flex;
     // flex-direction: column;
}

.scroll_item{
  max-height: 580px; /* 固定评论区域高度，允许滚动 */
  overflow-y: hidden;
  padding: 10px;
  margin-bottom: 20px;
  padding-right: 20px; /* 增加右侧的 padding，使内容不被滚动条遮挡 */
  margin-right: -20px; /* 通过负 margin 隐藏滚动条 */

}

</style>
