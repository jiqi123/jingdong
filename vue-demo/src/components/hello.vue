<template lang="html">
	<div class="contSingleList">
    	<div class="dw">
    		<div class="head">
	    		<mt-swipe :auto="2000" :show-indicators="false">
	    			<mt-swipe-item><img src="../img/img_banner.png" alt=""></mt-swipe-item>
	    			<mt-swipe-item><img src="../img/img_banner.png" alt=""></mt-swipe-item>
	    			<mt-swipe-item><img src="../img/img_banner.png" alt=""></mt-swipe-item>
	    		</mt-swipe>
	    		<header class="header">
		    		<a href="javascript:;"><input type="text" placeholder="京东生鲜超级品类日，领卷满199减99" /></a>
		    		<a href="javascript:;">登陆</a>
		    	</header>
	    	</div>
	    	<div class="banner">
	    		<img src="../img/img_nav.png" alt="" class="img" />
	    	</div>
    	</div>
    	<cont></cont>
    	<foot></foot>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'mint-ui';
	import foot from "./foot.vue"
	import cont from "./cont.vue"
    export default {
         components:{
	    	foot:foot,
	    	cont:cont
	    }
    }
</script>
<style scoped>
	.dw{position: fixed;top:0;}
	.head{width: 100%;height:7rem;position: relative;overflow: hidden;}
	.head img{float: left;width:100%;height:7rem;position: relative;}
	.header{width: 100%; font-size: .18rem;line-height: .44rem;text-align: center;
	  padding-left: .4rem; box-sizing: border-box; position: absolute;top:.4rem;display: flex;}
	.header a:nth-child(1){flex: 8;}
	.header a:nth-child(2){flex: 2;text-decoration: none;color:#000;text-align: center;padding-top:.6rem; }
	.header a input{width:100%;height: 1.5rem;border-radius: 10px;border:0;
		outline: 0;padding-left: .4rem;box-sizing: border-box;}
	.banner{width: 100%;height: 5rem;z-index: 9999;}
	.img{z-index: 9999;}
	.yo-scroll {
	    font-size: 24px;
	    position: absolute;
	    top: 80px;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    overflow: auto;
	    z-index: 100;
	    height: auto;
	    -webkit-overflow-scrolling: touch;
		}
		.inner {
        position: absolute;
        top: -5rem;
        width: 100%;
        height: auto;
    }
    .pull-refresh {
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            height: 5rem;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
        }
        .load-more {
        height: 5rem;
        line-height: 5rem;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: none;
    }
    .nullData {
        font-size: 26px;
        color: #999999;
        height: 100px;
        line-height: 80px;
        text-align: center;
    }
    .down-tip{
    	display: none;
    }
    .refresh-tip{
    	display: none;
    }
    .up-tip {
        display: none;
    }
    .up-tip:before{
    	 content: '';
        display: inline-block;
        width: 160px;
        height: 70px;
        background-size: 70% !important;
        position: absolute;
        top: 0;
        left: 20%;
    }
    .refresh-tip:before {
        content: '';
        display: inline-block;
        width: 160px;
        height: 70px;
        background-size: 70% !important;
        position: absolute;
        top: 0;
        left: 20%;
    }
	.yo-scroll.touch .inner {
	    transition-duration: 0;
	}
	
	.yo-scroll.down .down-tip {
	    display: block;
	}
	
	.yo-scroll.up .up-tip {
	    display: block;
	}
	
	.yo-scroll.refresh .refresh-tip {
	    display: block;
	}
</style>


