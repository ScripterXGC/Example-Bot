module.exports = {
	data: {
		  "name": "purge",
		  "description": "Delete amount of messages.",
		  "options": [
		    {
		      "type": 10,
		      "name": "amount",
		      "description": "Amount 1-1000",
		      "required": true
		    }
		  ]
		},
	code: `
	$onlyIf[$hasPerms[$guildID;$clientID;Administrator]==true;
	$title[Info ⚠️]
	$description[I have no admin permission, please contact an admin.]]
	
	$onlyIf[$hasPerms[$guildID;$authorID;Administrator]==true;
	$title[Info ⚠️]
	$description[You have no admin permission, please contact an admin.]]
	
	$onlyIf[$option[amount]>=1;
	$title[Info ❌]
	$description[You can only purge more than 1 message, please contact an admin.]]
	
	$onlyIf[$option[amount]<1000;
	$title[Info ❌]
	$description[You can only purge less than 1000 messages, please contact an admin.]]
	$let[messages;$clearMessages[$channelID;$option[amount];false;true]]
	
	$title[Info ✅]
	$description[**$username** has deleted **$get[messages] messages**.]
	`
}