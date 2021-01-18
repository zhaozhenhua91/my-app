<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.$api.getUserInfo({
				user_id: '5ff7da009fea3c000176acf1'
			}).then((res)=>{
				this.$store.dispatch('set_userinfo', res.data);
				console.log(res);
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/gaoyia-parse/parse.css';
	page {
		background-color: #EDF4F8;
	}
</style>
