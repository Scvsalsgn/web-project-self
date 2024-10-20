
<template>

<div class="container" style="top: 0;">


<div class=" bg-primary" style="padding-top:1px;padding-bottom:1px;">
<h1 class="text-left text-white" style="margin-left:80px;">互动社区</h1>  
</div>

<!-- <button class="btn btn-primary">test</button> -->


<p style="font-size: 25px;font-weight: bold;margin-bottom:5px;">All Comments</p>

<div class="input-group">
  <textarea class="form-control" aria-label="With textarea" placeholder="Please input your comment"></textarea>
  <button class="btn btn-outline-secondary btn-primary" type="button" >send</button>
</div>

<comments_cards></comments_cards>



</div>
</template>


<script>

import comments_cards from '../components/comment_cards.vue'

export default {
  components: {
    comments_cards,
  }
}



</script> 





<style>
.btn-primary {
  color: #ffffff; /* 设置按钮的文字颜色 */
}



</style>


