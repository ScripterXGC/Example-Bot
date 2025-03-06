module.exports = {
	data: {
		"name": "kick",
		"description": "Kick a user.",
		"options": [
			    {
			      "type": 6,
			      "name": "user",
			      "description": "User to kick.",
			      "required": true
			    },
				{
			      "type": 3,
			      "name": "reason",
			      "description": "Reason to apply. (Optional)",
			      "choices": []
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
	$if[$option[reason]==;
	
	$let[booleanKick;$kickMember[$guildID;$option[user]]]
	$if[$get[booleanKick]==true;
	$title[Info ✅]
	$description[**$username** has successfully kicked **$username[$option[user]]** without reason.];
	
	$ephemeral
	$title[Info ❌]
	$description[**$username** has failed to kick **$username[$option[user]]** without reason.]];
	
	$let[booleanKick;$kickMember[$guildID;$option[user];$option[reason]]]
	$if[$get[booleanKick]==true;
	$title[Info ✅]
	$description[**$username** has successfully kicked **$username[$option[user]]** with reason: "$option[reason]".];
	
	$ephemeral
	$title[Info ❌]
	$description[**$username** has failed to kick **$username[$option[user]]** with reason: "$option[reason]".]]]
	`
}