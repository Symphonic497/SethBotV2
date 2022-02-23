const { Client, Collection } = require('discord.js');
const regex = /omage$/;
const regex2 = /(a|e|i|o|u)$/;
const regex3 = /homie+/;
var flag = 0;
module.exports = {
	name: 'messageCreate',
	execute(interaction) {
        //Report Message
		console.log(`${interaction.author.tag} in #${interaction.channel.name} triggered messageCreate: ${interaction}`);
        //Parse Message
        let str = String(interaction.content).split(' ');
        let omage = [];
        let j = 0;
        /*for (const i of str){ //for debug purposes
            console.log(i);
        }*/
        if(String(interaction.content).match(regex) && interaction.author.tag != 'SethBot#2693'){//checks if a word ends with omage
            for(const i of str){
                if(i.match(regex)){ //find all instances of words ending with omage
                    omage[j] = i; //save for later
                    j++; //index
                    if(j > 1){ //if multiple: set flag to concatinate words
                        flag = 1
                    }
                }
            }
            if(flag == 1){ //concat omage's
                let newomage = ''; //helper str
                for(const i of omage){ //for array of omage words
                    //console.log(i.slice(0,-5)); //used for debug
                    if(i.slice(-5,-4).match(regex2)){ //if letter before omage ends in a vowel
                        //console.log(i.slice(-5,-4)); //used for debug
                        newomage = newomage.concat(i.slice(0,-5)); //keep vowel
                    }else{ //otherwise, its a consonate
                        newomage = newomage.concat(i.slice(0,-6)); //cut consonate
                    }
                }
                if(newomage.match(regex2)){ // if still ends in vowel
                    newomage = newomage.concat('m'); 
                }
                newomage = newomage.concat('omage'); 
                interaction.reply(`More like ${newomage}`); //reply
                flag = 0; //flag reset
            }
            else{
                interaction.reply(`https://media.discordapp.net/attachments/743595310328184852/808534402262761492/oggy_gif.gif`); //otherwise post picture of this cheese sniffing dog
            }
        }
        if(String(interaction.content).match(regex3) && interaction.author.tag != 'SethBot#2693'){ //if Homie is used, and omage isnt, send this picture of two guys dancing in sync (Because they are homies)
            interaction.reply('https://tenor.com/view/jumpstyle-jump-geil-tanzen-dance-gif-17433071');
        }
	},
};