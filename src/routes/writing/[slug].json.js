import { getPost } from './_posts';

import { get as getIndex } from './index.json.js'

const lookup = new Map();

export function get(req, res, next) {
	const { slug } = req.params;

  if (slug === 'index') {
    // FIXME: For some reason GET requests weren't reaching routes/writing/index.json.js
    getIndex(req, res, next)
    return
  }

	if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
		const post = getPost(slug);
		lookup.set(slug, JSON.stringify(post));
	}

	const json = lookup.get(slug);

	if (json) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(json);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
