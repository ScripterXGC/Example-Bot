module.exports = {
	data: {
		"name": "skip",
		"description": "Skip a music track."
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
	
	$skipTrack
	$title[Skipped current track!]

	$description[Skipped the current track playing.]
	`
}