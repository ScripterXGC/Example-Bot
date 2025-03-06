module.exports = {

	data: {

		"name": "ban",

		"description": "Ban a user.",

		"options": [

			    {

			      "type": 6,

			      "name": "user",

			      "description": "User to ban.",

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

	

	$let[booleanBAN;$ban[$guildID;$option[user]]]

	$if[$get[booleanBAN]==true;

	$title[Info ✅]

	$description[**$username** has successfully banned **$username[$option[user]]** without reason.];

	

	$ephemeral

	$title[Info ❌]

	$description[**$username** has failed to ban **$username[$option[user]]** without reason.]];

	

	$let[booleanBAN;$ban[$guildID;$option[user];$option[reason]]]

	$if[$get[booleanBAN]==true;

	$title[Info ✅]

	$description[**$username** has successfully banned **$username[$option[user]]** with reason: "$option[reason]".];

	

	$ephemeral

	$title[Info ❌]

	$description[**$username** has failed to ban **$username[$option[user]]** with reason: "$option[reason]".]]]

	`

}
