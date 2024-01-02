const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('서버의 정보를 확인합니다.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(
			`이 서버는 ${interaction.guild.name} 이며, ${interaction.guild.memberCount}명의 멤버가 있습니다.`,
		);
	},
};
