
const podcast = {
  display: 'Podcast',
  classes: 'bg-red-200',
}

const conference = {
  display: 'Conference',
  classes: 'bg-yellow-200',
}

const article = {
  display: 'Article',
  classes: 'bg-green-200',
}

const talks = [
  {
    title: 'Tales From The Crypt #109',
    date: '2019-10-22',
    tags: [podcast],
    description: 'Second rip with Marty. 167 minutes of Bitcoin shit talk.',
    link: 'https://www.youtube.com/watch?v=rl6RU9UhjH0',
  },
  {
    title: 'Noded 0.38.0',
    date: '2019-01-16',
    tags: [podcast],
    description: 'Infomercial for BUIDL Bootcamp and strong property rights',
    link: 'https://soundcloud.com/noded-bitcoin-podcast/noded-0380-with-justin-moon',
  },
  {
    title: 'Stephan Livera #105',
    description: 'Me and Stepan Snigirev discuss DIY hardware wallets',
    date: '2019-09-03',
    tags: [podcast],
    link: 'https://stephanlivera.com/episode/105/',
  },
  {
    title: 'Stephan Livera #36',
    description: 'Bitcoin eductation',
    date: '2018-11-29',
    tags: [podcast],
    link: 'https://stephanlivera.com/episode/36/',
  },
  {
    title: 'Stephan Livera #36',
    description: 'The first rip with Marty. I almost die eating pizza.',
    date: '2019-10-22',
    tags: [podcast],
    link: 'https://www.youtube.com/watch?v=RMfyc8aqjI0',
  },
  {
    title: 'MCC 2019: The Next Generation of Bitcoin Developers',
    description: 'Incentives involved in growing Bitcoin developer population',
    date: '2019-10-22',
    tags: [conference],
    link: 'https://www.youtube.com/watch?v=kWwI2GOXSGA',
  },
  {
    title: 'Bitcoin Magazine: Educating the Next Wave of Bitcoin Developers',
    description: 'Bitcoin Magazine interviewed myself, Chaincode Labs, and Jimmy Song about training Bitcoin developers',
    date: '2019-01-19',
    tags: [article],
    link: 'https://bitcoinmagazine.com/articles/educating-next-wave-bitcoin-developers',
  },
]

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
  const sorted = talks.sort((a, b) => a.date < b.date ? 1 : -1)
  const serialized = JSON.stringify(sorted)
	res.end(serialized);
}
