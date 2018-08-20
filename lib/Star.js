class Star{
	constructor(container){
		this.span=document.createElement("div");	
		this.deg=0;

		$(this.span).css({
			width:200,
			height:200,
			background:"red",
			transformOrigin:"center",
			transform:"rotate("+this.deg+"deg)"
		});
		
		container.append($(this.span));
	}
	tick(){
		this.deg+=2;
	}
	render(){
		$(this.span).css({transform:"rotate("+this.deg+"deg)"});
	}
}