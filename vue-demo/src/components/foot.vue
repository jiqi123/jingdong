<template>
	<div id="box">
		<footer class="footer">
			<ul>
				<li>
					<div class="foot">
						<i class="fa fa-home img"></i>
					</div>
					首页
				</li>
				<li>
					<div class="foot">
						<i class="fa fa-facebook img"></i>
					</div>
					分类
				</li>
				<li>
					<div class="foot">
						<i class="fa fa-search img"></i>
					</div>
					搜索
				</li>
				<li>
					<div class="foot">
						<i class="fa fa-ship img"></i>
					</div>
					购物车
				</li>
				<li>
					<div class="foot">
						<i class="fa fa-user img"></i>
					</div>
					收藏
					
				</li>
			</ul>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"box"	
	}
</script>
<style scoped>
	@import "../fonts/font-awesome.min.css";
	*{list-style: none; margin: 0;padding: 0;background: #fff;}
	.footer{width: 100%;height: 3.6rem;position: fixed;bottom: 0;background: #fff;}
	.footer ul{background: #fff;display: flex;}
	.footer ul li{flex: 1;font-size: .14rem; color:#ACACAC;text-align: center;}
	.img{width: 2rem;height: 2rem;font-size: 1.6rem; color:#ACACAC;padding-top:10px ;}
	.footer ul li:hover{
		color:#C00000;
	}
	.img:hover{
		color:#C00000;
	}
</style>