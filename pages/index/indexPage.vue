<template>
	<view class="container">
		
		
    <danmuVue></danmuVue>
    
	</view>
</template>

<script>
  import danmuVue from '../../components/danmuCard.vue'
	export default {
    components:{
      danmuVue
    },
		
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
