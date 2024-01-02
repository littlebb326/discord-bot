const { SlashCommandBuilder } = require('discord.js');
const moment = require('moment');
require('moment/locale/ko');

const dateType = ['주간', '야간', '비번', '휴무'];
const refDate = moment('20240102', 'YYYY-MM-DD');
const curDate = moment(new Date(), 'YYYY-MM-DD');
const daysDifferent = curDate.diff(refDate, 'days');
const curDateType =
	daysDifferent % 4 >= 0
		? dateType[daysDifferent % 4]
		: dateType[(daysDifferent % 4) + 4];
const replyText = `
오늘의 날짜는 ${curDate.format('YYYY년 MM월 DD일')} 입니다.
오늘 영석이의 근무는 ${curDateType} 입니다.
`;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sys')
		.setDescription('get work day of SYS'),
	async execute(interaction) {
		await interaction.reply(replyText);
	},
};
