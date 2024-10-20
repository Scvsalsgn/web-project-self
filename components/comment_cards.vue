<template>

<view v-for="(item,index) in commentsInfo" :key="index">

<div class="comment_cards" style="margin-top: 20px;">
    
<div class="forFlex" style="display: flex;flex-direction: row;">
<img src="../static/my_icon.png" alt="" style="left: 5%;width: 60px;height: 60px;">

<div class="text_content" style="display: flex;flex-direction: column;height: auto;">
<text class="person_name" style="top: 5px;margin-left: 10px;color: gray;">用户名</text>

<text class="comment_content" style="padding:15px; margin-left:10px;bottom: 0;margin-top: 3px;background-color: #f8f9fa;"> {{item.comments_content}}  </text>


</div>

</div>

<div class="function_content">
<button class="btn custom-btn" style="margin-left: 70px;">reply</button>
 <img v-show="!isLiked" src="../static/like.png" alt="" style="height: 20px;width: 20px;margin-left: 12px;" @click="accpet()" > 
 <img v-show="isLiked" src="../static/isLiked.png" alt="" style="height: 20px;width: 20px;margin-left: 12px;" @click="accpet()" > 

</div>
</div>

</view>

</template>




<script>

export default {

    methods:{
        accpet(){
            this.isLiked=!this.isLiked
        }
    },






    data(){
        return{
            isLiked:false,
            commentsInfo:[
                {
                 "comments_content":"这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容",
                },

                {
                 "comments_content":"这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容",
                },

                {
                 "comments_content":"这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容",
                },

                {
                 "comments_content":"这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容",
                },

                {
                 "comments_content":"这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容",
                },

                {
                 "comments_content":"这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容",
                },
            ],
        
        }
    }
    

}
    


</script>





<style>
.custom-btn{
    width: 50px;
    height: 30px;
    font-size: small;
    text-align: center;
    top:0; 
}


</style>

