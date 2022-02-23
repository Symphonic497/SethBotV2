const { SlashCommandBuilder } = require('@discordjs/builders');
const Quotes = 10;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('sethlas')
		.setDescription('No more cages!'),
	async execute(interaction) {
        let quote = '';
        switch(Math.floor(Math.random() * Quotes)){
            case 0:{
                quote = 'A shepherd with no flock is just an idiot with a stick."';
                break;

            }
            case 1:{
                quote = "They work their fingers to the bone serving a king they'll never meet! I must show them there is more to life!";
                break;

            }
            case 2:{
                quote = 'Only sheep need a leader.';
                break;

            }
            case 3:{
                quote = 'Rise up, brothers and sisters!';
                break;

            }
            case 4:{
                quote = 'Tradition is a crutch for the mindless.';
                break;

            }
            case 5:{
                quote = 'I will show them a world without lords or peasants!';
                break;

            }
            case 6:{
                quote = 'Every Debbian a king!';
                break;

            }
            case 7:{
                quote = 'No prison can hold me!';
                break;

            }
            case 8:{
                quote = 'Return to your master, like the lapdog you are!';
                break;

            }
            case 9:{
                quote = "A prince must imitate the fox and the lion. For the lion cannot defend himself from traps and the fox cannot defend himself from wolves. One must therefore be a fox to recognize traps, and a lion to frighten wolves. Those that wish to be only lions don't understand this. Therefore a prudent ruler ought not to keep faith when by so doing it would be against his interest. And when the reasons which made him bind himself no longer exist if men were all good, this precept would not be a good one, but as they are bad, and would not observe their faith with you, so you are not bound to keep faith with them";
                break;

            }


        }
        interaction.reply({content: 'The great rebellion starts now!', ephemeral: true});
		interaction.channel.send(quote);
	},
};