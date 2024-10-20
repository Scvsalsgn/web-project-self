<template>
  <div class="post-list">
    <cards v-for="post in posts" :key="post.id" :post="post" @click="selectPost(post)"/>
  </div>
</template>

<script>
import cards from './cards.vue';

export default {
  components: {
    cards,
  },
  data() {
    return {
      posts: [
        { id: 1, title: '海口CBD的日落居然那么美', description: '国兴大道大英山CBD已经初具规模，未来待海南中心建成，海口的天际线将会更有层次感!', image1: 'https://mp-c3036ca5-d4f1-4495-acd5-cf521789bd80.cdn.bspapp.com/static/img1.jpg',image2:'https://mp-c3036ca5-d4f1-4495-acd5-cf521789bd80.cdn.bspapp.com/static/img2.jpg' ,
        comments: [ // 数据在哪个组件，更新数据的方法就在哪个组件
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
        ],
      },
        { id: 2, title: 'Post 2', description: 'Description 2', image1: 'https://via.placeholder.com/300' },
        { id: 3, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 4, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 5, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 6, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 7, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 8, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 9, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 10, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 11, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 12, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        
      ],
    };
  },
  methods:{
    selectPost(post) {
          this.$emit('post-selected', post); // 向父组件传递选中的post数据
        },
    deleteComment(postId,commentIndex){
      console.log("this.posts",this.posts)
      console.log("this.posts.comments",this.posts.comments)
          // this.posts.comments.splice(index, 1);
           const post = this.posts.find(p => p.id === postId);
                if (post && post.comments) {
                  post.comments.splice(commentIndex, 1); // 删除指定评论
                  console.log('Deleted comment at index', commentIndex);
                }
          console.log("deleted a this index",index)
          console.log("this.posts.comments",this.posts.comments)
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 使得卡片均匀分布 */
  padding: 16px;
}

.card-item {
  flex: 0 1 calc(33.33% - 16px); /* 设置每个卡片的宽度，减去间距 */
  margin-bottom: 16px; /* 每个卡片下方的间距 */
}

@media (max-width: 1024px) {
  .card-item {
    flex: 0 1 calc(50% - 16px); /* 屏幕较窄时，每行显示2个卡片 */
  }
}

@media (max-width: 600px) {
  .card-item {
    flex: 0 1 100%; /* 更小的屏幕时，每行显示1个卡片 */
  }
}
</style>
