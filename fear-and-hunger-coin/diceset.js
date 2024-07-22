Hooks.once('diceSoNiceReady', (dice3d) => {
  	dice3d.addSystem({id:"fear-and-hunger-coin",name:"Fear & Hunger Coin"},false);
	dice3d.addDicePreset({
		type:"dc",
		labels:[
			'modules/fear-and-hunger-coin/textures/tails.webp','modules/fear-and-hunger-coin/textures/heads.webp'
		],
		bumpMaps:[
			'modules/fear-and-hunger-coin/textures/tails_bump_v2.png','modules/fear-and-hunger-coin/textures/heads_bump_v2.png'
		],
		system:"fear-and-hunger-coin"
	});
});
