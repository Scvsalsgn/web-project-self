<template>

<!-- <div class="scroll_item"> -->
<view v-for="(item,index) in comments" :key="index">

<div class="comment_cards" style="margin-top: 20px;">
    
<div class="forFlex" style="display: flex;flex-direction: row;">
<img src="../static/my_icon.png" alt="" style="left: 5%;width: 60px;height: 60px;">

<div class="text_content" style="display: flex;flex-direction: column;height: auto;">
<text class="person_name" style="top: 5px;margin-left: 10px;color: gray;">{{item.name}}</text>

<!-- <text class="comment_content" style="padding:15px; margin-left:10px;bottom: 0;margin-top: 3px;background-color: #f8f9fa;border-radius: 20px"> {{item.comments_content}}  </text> -->
<text class="comment_content" style="padding:15px; margin-left:10px;bottom: 0;margin-top: 3px;background-color: #f8f9fa;border-radius: 20px"> {{item.content}}  </text>

</div>

</div>

<div class="function_content" style="margin-top: 6px;">
<!-- <button class="btn custom-btn" style="margin-left: 70px;">reply</button> -->
<!-- <button class="btn custom-btn" style="margin-left: -3px;" @click="deleteComment(index)">delete</button> -->
 <img v-show="!isLiked[index]" src="../static/like.png" alt="" style="height: 20px;width: 20px;margin-left: 80px;" @click="accpet(index)" > 
 <img v-show="isLiked[index]" src="../static/isLiked.png" alt="" style="height: 20px;width: 20px;margin-left: 80px;" @click="accpet(index)" > 

<img src="../static/delete_icon.png" style="height: 20px;width: 20px;margin-left: 18px;" alt="" @click="deleteComment(index)"/>

</div>
</div>

</view>

<!-- </div> -->

<view :style="{ display: comments && comments.length > 0 ? 'none' : 'block' } " style="text-align: center;margin-top: 35px;margin-bottom: 35px;align-items: center;">There is no comment here</view>

</template>




<script>

export default {
    props:["comments"],


    methods:{
        accpet(index){
            if(this.isLiked[index]===undefined) {
                this.isLiked[index] = false; 
            }

            this.isLiked[index]=!this.isLiked[index]
        },
        deleteComment(index){
            // this.comments.splice(index, 1)  //props为只读，不可直接在子组件中修改
            this.$emit('delete-comment', index);
            console.log(index,"index before")
        }
    },






    data(){
        return{
            // isLiked:false,
            isLiked:[],
        
        }
    }
    

}
    


</script>





<style>
.scroll_item{
  max-height: 410px; /* 固定评论区域高度，允许滚动 */
  overflow-y: hidden;
  padding: 10px;
  margin-bottom: 20px;
}

.scroll_item:hover{
  overflow-y: auto;  /* 当内容溢出时，启用垂直滚动 */  
}
</style>

