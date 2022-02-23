const { SlashCommandBuilder } = require('@discordjs/builders');
const Quotes = 6;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('quirky')
		.setDescription('Seth Moment'),
	async execute(interaction) {
        let quote = '';
        switch(Math.floor(Math.random() * Quotes)){
            case 0:{
                quote = 'https://cdn.discordapp.com/attachments/744008969059565621/941751704246951996/IMG_5797.jpg';
                break;

            }
            case 1:{
                quote = 'https://cdn.discordapp.com/attachments/765672559404122142/937785385646432347/image0.jpg';
                break;

            }
            case 2:{
                quote = 'https://cdn.discordapp.com/attachments/744785358645887088/934966210750193674/74232A77-A26B-488A-AD40-08FD6C4DE0FE.jpg';
                break;

            }
            case 3:{
                quote = 'https://cdn.discordapp.com/attachments/744785358645887088/934965400171581450/IMG_5647.jpg';
                break;

            }
            case 4:{
                quote = 'https://cdn.discordapp.com/attachments/744008969059565621/930538339793268746/image0.jpg';
                break;

            }
            case 5:{
                quote = 'https://cdn.discordapp.com/attachments/744008969059565621/930521923589382174/IMG_5506.jpg';
                break;

            }
        }
        interaction.reply('Quirked up  Seth  with a  little bit of swag  busts  it  down... is he goated  with the sauce?');
		interaction.channel.send(quote);
	},
};