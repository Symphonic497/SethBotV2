const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('drip')
		.setDescription('Sends a dripped out dog'),
	async execute(interaction) {
        interaction.reply({content: 'quirked up dog with a little bit of swagger', ephemeral: true});
		interaction.channel.send(`https://cdn.discordapp.com/attachments/744008969059565621/933416875671572490/12A83911-42C7-4951-98D1-9EDDD2654EB0.jpg`);
        //interaction.replyDelete;
	},
};