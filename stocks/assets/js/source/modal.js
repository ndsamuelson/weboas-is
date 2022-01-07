var modal_cntr=0;
function modal_show(title,content,btn_ok_label,callback_ok,close_on_ok,is_full_screen){
	if(typeof(close_on_ok)=='undefined')close_on_ok=true;
	return (function(x,close_on_ok){
		
			modal='<div id="modal-box-'+x+'" class="remodal '+(is_full_screen?'modal-fullscreen':'')+'" data-remodal-id="modal">'+
						'	<button data-remodal-action="close" class="remodal-close"></button>'+
						'	<h1>'+title+'</h1>'+
						'	<p>'+
								content +
						'	</p>'+
						'	<br>'+
						(typeof(btn_ok_label)!='undefined'?'<button type="button" data-remodal-action="confirm" class="remodal-confirm">'+btn_ok_label+'</button>':'')+
						'<button type="button" data-remodal-action="cancel" class="remodal-cancel">'+(typeof(btn_ok_label)=='undefined'?'OK':'Cancel')+'</button>'+
						'</div>';
		
			modal=$(modal);

			$('body').append(modal);
			modal_inst=modal.remodal({closeOnConfirm:false});
			modal_inst.open();
			
			modal.on('closed',function(){$(this).remove();});
			
			$('#modal-box-'+x+' #modal_ok').on('click',function(){
					callback_ok(modal,modal_inst);
					if(close_on_ok)
						modal_inst.close();
			});

			return modal;
	})(modal_cntr++,close_on_ok);
}