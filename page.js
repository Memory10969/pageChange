
$(function(){
	// 当前页码,默认 1
	var currentPage = 1;
	var totalPage;
	//定义数据数组
	var arr = [];
	$("button").click(function(){
		// 获取总页数,并向上取整
		totalPage = Math.ceil(parseInt($("input[name='num']").val())/10);
		addData();
		addPage();
	})
	function addData(){
		// 生成数据
		var start = currentPage*10-9;
		var end = currentPage*10;
		$(".content").empty();
		for(let i = start;i<=end;i++){
			if(i%5==0){
				$(".content").append("<span>"+i+"</span><br>");
			}else{
				$(".content").append("<span>"+i+"</span>");
			}
			arr.push(i);
		}
	}
	function addPage(){
		$(".page").empty();
		//上一页
		if(currentPage!=1){
			$(".page").append("<span id='previous'><<</span>");
		}
		//生成页码
		var startPage = totalPage<10?1:currentPage+4>=totalPage?totalPage-9:(currentPage-5>0?currentPage-5:1);
		var endPage = totalPage<10?totalPage:(currentPage<6?10:(currentPage+4<totalPage?currentPage+4:totalPage));
		for(let i = startPage;i<=endPage;i++){
			$(".page").append("<span id='num"+i+"'>"+i+"</span>");
			if(currentPage==i){
				$("#num"+i).css({"backgroundColor":"red"});
			}
		}
		// 下一页
		if(currentPage!=totalPage){
			$(".page").append("<span id='next'>>></span>");
		}
		addEvent();
	}
	// 页码点击事件
	function addEvent(){
		$(".page span").click(function(){
			if(this.innerText=="<<"){
				currentPage--;
			}else if(this.innerText==">>"){
				currentPage++;
			}else{
				currentPage = parseInt(this.innerHTML);
			}
			addData();
			addPage();
		}).mouseover(function(){
			$(this).css({"cursor":"pointer"})
		})
	}
})