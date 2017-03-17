$(function(){
	var list=$('.list');
	console.log(list)
	for (var i = 0; i < list.length; i++) {
			list[i].index=i;
		var lis=list[i].getElementsByTagName('li')
			if(lis.length>2){//如果条数大于2，下面查看全部显示；默认显示3条
				$(list[i]).next().show();
			}else{
				$(list[i]).next().hide();
			}
		$(list[i]).next().on('click',function(){
			alert(1)
			$(list[i]).html()
		})
	}
	dianzan();
	//点赞++
	function dianzan(){
		var pins=$('.pin');
		for (var i = 0; i < pins.length; i++) {
			var span1=$(pins[i]).children().eq(0)
			span1.on('click',function(){
				var num=$(this).html();
				num++;
				$(this).html(num)
			})
		}
	}
})
