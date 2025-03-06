module.exports = {

	data: {

		"name": "play",

		"description": "Play a music track.",

		"options": [

				{

			      "type": 3,

			      "name": "query",

			      "description": "URL or query to apply. (Optional)",

			      "choices": []

			    }

		]

	},

	code: `

	$onlyIf[$voiceID!=;

	$title[Info ⚠️]

	$description[Please join a voice channel, if problem perists, please contact an admin.]]

	

	$if[$hasPlayer[$guildID]==false;

	$!createPlayer[$guildID;$voiceID[$guildID;$authorID];$channelID]]

	

	$if[$isPaused[$guildID]==true;

	$resume[$guildID]]

	

	$jsonLoad[data;$addTrack[$guildID;$option[query]]]

	$title[Added a $env[data;type] to queue!]



	$description[$env[data;message]]

	

	$if[$env[data;type]==PLAYLIST;

	$addField[$env[data;playlistName]; Added **$env[data;trackCount]** Tracks];

	$addField[Added $env[data;trackTitle]; by **$env[data;trackAuthor]**]]

	

	$image[$env[data;trackImage]]

	`

}
