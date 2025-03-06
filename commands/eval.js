module.exports = {

	type: "messageCreate",

	name: "eval",

	code: `

	$onlyIf[$authorID==$botOwnerID;

	❌ You are not the bot owner.]

	

	$eval[$message]

	`

}
