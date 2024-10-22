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
        { id: 1, title: '海口CBD的日落居然那么美', description: '国兴大道大英山CBD已经初具规模，未来待海南中心建成，海口的天际线将会更有层次感!', 
        image1: 'https://mp-c3036ca5-d4f1-4495-acd5-cf521789bd80.cdn.bspapp.com/static/img1.jpg',image2:'https://mp-c3036ca5-d4f1-4495-acd5-cf521789bd80.cdn.bspapp.com/static/img2.jpg' ,
        comments: [
        {name: '黎小喵', content: '最近的天气真的挺好的'},
        {name: '💫Vincent 游北卡', content: "The weather's been really nice lately."},
        {name: 'Rose', content: 'so beatuiful!'},
        
        
        ],
      },
        { id: 2, title: '海口印象', description: '海口骑楼老街的晚上热闹非凡，本地人三三两两聚在一起吃饭喝酒聊天，路边停满了电动自行车，这就是海口人的松弛感吧。', 
        image1: 'https://sns-webpic-qc.xhscdn.com/202410221712/c1df0e9958b36d062298ba60eaa007a7/1040g0083196631g44k405n89krpllcniuan75q8!nd_dft_wgth_webp_3',
          comments: [
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
    ],
      },
        { id: 3, title: '海口观海台', description: '拍摄于日出前的蓝调，第一次用12mm焦段。晒晒海口的风光', 
        image1: 'https://sns-webpic-qc.xhscdn.com/202410221714/74ed1ee986404129566c88fc84d436f0/1040g00831969rfmp4u004aco5t260ej1f88hgb0!nc_n_webp_mw_1',
        comments: [ 
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
    ],
         },
        { id: 4, title: '这儿可能是海口人最多的地方', description: '不知道是不是淡季 哪哪人都很少坐公交经常包车就骑楼老街人不少一半诗意一半烟火 洋气复古 妈祖保佑 连吃几天吃老爸茶', 
        image1: 'https://sns-webpic-qc.xhscdn.com/202410221718/c42c201250cc8ce0d4c89852686086f2/1040g0083190qn0d154005nrfdo3g8ofksdib6lg!nc_n_webp_mw_1',
        comments: [ 
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
    ],  
         },
        { id: 5, title: 'Sunset in Haikou CBD is actually so beautiful!',  description: "Guoxing Avenue Danyingshan CBD has taken shape, the future to be built in Hainan Center, Haikou's skyline will be more layered!" ,
        image1: 'https://mp-c3036ca5-d4f1-4495-acd5-cf521789bd80.cdn.bspapp.com/static/img1.jpg',image2:'https://mp-c3036ca5-d4f1-4495-acd5-cf521789bd80.cdn.bspapp.com/static/img2.jpg' ,
        comments: [
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
        ],
      },
        { id: 6, title: 'Haikou Impression',  description: 'The old street of Haikou Jialou is bustling at night, locals gather in twos and threes to eat and drink and chat, and the roadside is full of motorized bicycles, which is the sense of relaxation of Haikou people, right?',
         image1: 'https://sns-webpic-qc.xhscdn.com/202410221712/c1df0e9958b36d062298ba60eaa007a7/1040g0083196631g44k405n89krpllcniuan75q8!nd_dft_wgth_webp_3',
        comments: [
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
        ],
      },
        { id: 7, title: 'Haikou Observation Deck', description: 'Taken in the blues before sunrise, first time using 12mm focal length. The scenery of Haikou',
         image1: 'https://sns-webpic-qc.xhscdn.com/202410221714/74ed1ee986404129566c88fc84d436f0/1040g00831969rfmp4u004aco5t260ej1f88hgb0!nc_n_webp_mw_1',
        comments: [
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
        ],
      },
        { id: 8, title: 'This is probably the most crowded place in Haikou.', description: "I don't know if it's off-season, but there's not many people here, so I take public transportation, and often take a chartered car, but the old Jialou Street is full of people, half poetic, half fireworks, and retro, and blessed by the Mazu, with a few days of Dad's Tea.",
         image1: 'https://sns-webpic-qc.xhscdn.com/202410221718/c42c201250cc8ce0d4c89852686086f2/1040g0083190qn0d154005nrfdo3g8ofksdib6lg!nc_n_webp_mw_1',
        comments: [
        {name: 'Bob', content: 'You see see you !'},
        {name: 'Jack', content: 'One day day 的!'},
        {name: 'Rose', content: 'What things have you ever done ?!'}
        ],
      },
        { id: 9, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 10, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 11, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        { id: 12, title: 'Post 3', description: 'Description 3', image1: 'https://via.placeholder.com/300' },
        
      ],
    };
  },
  methods:{
    selectPost(post) {
          this.$emit('post-selected', post); // trigger event to pass selected post data to parent component
        },
    deleteComment(postId,commentIndex){
      console.log("this.posts",this.posts)
      console.log("this.posts.comments",this.posts.comments)
          // this.posts.comments.splice(index, 1);
           const post = this.posts.find(p => p.id === postId);
                if (post && post.comments) {
                  post.comments.splice(commentIndex, 1); // delete comment at index
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /*make cards evenly spaced*/ 
  padding: 16px;
}

.card-item {
  flex: 0 1 calc(33.33% - 16px); /*set card width to 33.33% and add 16px gutters */ 
  margin-bottom: 16px; /*add 16px margin between cards */ 
}

@media (max-width: 1024px) {
  .card-item {
    flex: 0 1 calc(50% - 16px); /*display only 2 cards per row on smaller screens */ 
  }
}

@media (max-width: 600px) {
  .card-item {
    flex: 0 1 100%; /* display only one card per row on smaller screens */
  }
}
</style>
