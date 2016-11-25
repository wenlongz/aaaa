$(function  () {
	
	var istrue=true
	$('input').focus(function  () {
		istrue=false
		$('.wb').css({
			border:'solid 1px rgb(51,136,255)'
			
		})
		console.log(istrue)
	})
	$('input').blur(function  () {
		istrue=true
			$('.wb').css({
			border:'solid 1px rgb(204,204,204)'
		})
	})
	
	
		$('input').mouseover(function  () {
		
		if(istrue){	$('.wb').css({
			border:'solid 1px rgb(153,153,153)'
		})}
		
			})
		$('input').mouseleave(function  () {
		
		if (istrue) {
				$('.wb').css({
			border:'solid 1px rgb(204,204,204)'
		})
		
		}
			})
	
	
	
})