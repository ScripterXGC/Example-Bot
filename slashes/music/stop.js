module.exports = {
	data: {
		"name": "stop",
		"description": "Stop tracks from playing."
	},
	code: `
	$onlyIf[$voiceID!=;
	$title[Info ⚠️]
	$description[Please join a voice channel, if problem perists, please contact an admin.]]
	
	$if[$hasPlayer[$guildID]==false;
	$title[Info ⚠️]
	$description[Please play a track first, if problem perists, please contact an admin.]]
	
	$if[$isPaused[$guildID]==true;
	$resume[$guildID]]
	
	$destroyPlayer
	$title[Stopped current track!]

	$description[Stopped the current track from playing and continuing.]
	`
}