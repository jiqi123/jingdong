<template>
	<div class="">
		<div class="ms">
			<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			    <!-- slides -->
			    <swiper-slide>
			    	<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms1.jpg" />
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms2.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms3.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms4.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
			    </swiper-slide>
			    <swiper-slide>
			    	<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms5.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms6.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms7.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms8.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			
			    </swiper-slide>
			    <swiper-slide >
			    	<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms9.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
	    			<div class="msn">
	    				<div class="imgs">
							<img src="../img/ms/img_ms10.jpg"/>
						</div>
						<div class="p">￥899</div>
						<div class="p ps">￥1200</div>
	    			</div>
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			    <div class="swiper-scrollbar"   slot="scrollbar"></div>
			</swiper>
	    		</div>
	</div>
</template>
<script>
	import "swiper/dist/css/swiper.css";
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
	 export default {
	    name: 'carrousel',
	    data() {
	      return {
	        notNextTick: true,
	        swiperOption: {
	          // swiper optionss 所有的配置同swiper官方api配置
//	          autoplay: 2000,
//	          direction : 'vertical',
	          grabCursor : true,
	          setWrapperSize :true,
	          autoHeight: true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          scrollbar:'.swiper-scrollbar',
	          mousewheelControl : true,
	          observeParents:true,
	          debugger: true,
	        }
	      }
	    },
	     components:{
		    swiper,
		    swiperSlide
		  }
	  }
</script>
<style>
	.pp{padding-top: .8rem;display: }
	.pss{color:deeppink;padding-bottom: .4rem;}
	.ms{width: 100%;height: 7rem;background: #fff;margin-top: 7px;}
	.msn{width: 5rem;height: 10rem;text-align: center;float:left;z-index: 9996;}
</style>