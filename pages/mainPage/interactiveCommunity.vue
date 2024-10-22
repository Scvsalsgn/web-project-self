<template>
  <view>

    <NavBar></NavBar>


    <div class="container" style="display: flex; justify-content: center;height: 300px;width: 100%;margin-top: 10px;">
    
    <danmuCard-vue></danmuCard-vue>

    </div>

    <div style="position:initial;margin-top: 320px;">
      <postListVue @post-selected="handlePostSelected" ref="postList" style="position: relative;"></postListVue>
    </div>

      <div class="modal-container">
      <modalPartVue :show="this.showModal" @close="this.showModal=false">
              <div v-if="selectedPost" style="display: flex;flex-direction: row;">

                
<div class="carousel-container" style="width: 1500px;height: 100%;">
    
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style="margin-top: calc(50% - 200px);">
    
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      
    
      <div class="carousel-inner" >
    
        <div class="carousel-item active">
          <img :src="selectedPost.image1" class="d-block w-100" alt="Image 1" style="object-fit: contain;width:100%;">
        </div>
    
        <div class="carousel-item">
          <img :src="selectedPost.image2" class="d-block w-100" alt="Image 2" style="object-fit: contain;width:100%;">
        </div>
      </div>
      
    
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
      </modalPartVue>
      </div>
      


      <AppFooter></AppFooter>

  </view>
</template>

<script>
  import danmuCardVue from '../../components/danmuCard.vue';
  import postListVue from '../../components/postList.vue';
  import modalPartVue from '../../components/modalPart.vue';
  import comments_cardsVue from '../../components/comments_cards.vue';
  import NavBar from '../../components/NavBar.vue';
  import AppFooter from '../../components/AppFooter.vue';
  
  export default {
    components:{
      danmuCardVue,
      postListVue,
      modalPartVue,
      comments_cardsVue,
      NavBar,
      AppFooter,
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
      // 1. Checking the legality of inputs
      if (!name || !content) {
        alert('The content cannot be empty！')
        return
      }
      // 2. Based on the input data, encapsulate it into a comment object
      const comment = {
        name,
        content
      }
      console.log(comment,"comment in AddVue")
      // 3、add to comments
      this.addComment(comment)
      // 4、clear input box
      this.name = ''
      this.content = ''
      },
      addComment (comment) {
        if (this.selectedPost && this.selectedPost.comments) {
    this.selectedPost.comments.unshift(comment); // add comment to the beginning of the array by unshift method
  } else {
    console.error('selectedPost or comments is undefined');
  }
    },

      handlePostSelected(post) {
            this.selectedPost = post; //receive selected post data from postList
            //this is reference, so it will refresh automatically
            this.showModal = true;
          },
    
      handleDeleteComment(index) {
    try {
      if (this.selectedPost && this.selectedPost.comments) {
        this.selectedPost.comments.splice(index, 1);  // to delete a comment, we can use splice method to remove it from the array
      }
    } catch (error) {
      console.warn('Error caught: ', error); 
    }
  }
    }
  }
</script>

<style lang="scss">
.scroll_item{
  max-height: 580px; 
  overflow-y: hidden;
  padding: 10px;
  margin-bottom: 20px;
  padding-right: 20px; 
  margin-right: -20px; 
  // padding and margin to make the scroll bar disappear

}


</style>
