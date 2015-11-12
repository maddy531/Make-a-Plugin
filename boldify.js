(function($){
  $.fn.boldify= function(){
    if (this.css("font-weight") !== "bold"){

      return this.css("font-weight", "bold");
    }
    else{
      return this.css("font-weight","normal")
    }
  };

} )(jQuery);
