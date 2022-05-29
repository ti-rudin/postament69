export const SITE_URL = 'https://postament69.ru/';

export const GH_USER_REPO = 'ti-rudin/postament69'; // used for pulling github issues and offering comments
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const SITE_TITLE = 'Постамент 69. Изготовление Памятников';
export const SITE_DESCRIPTION = 'Изготовление, рестоврация и установка памятников и мемориальных комплексов  в твери и тверской области.';
export const DEFAULT_OG_IMAGE =
	'';

//export const MY_YOUTUBE = 'https://youtube.com/swyxTV';

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
import { writable } from 'svelte/store';

export const isDarkFlag = writable();
export const isMngr = writable();
export const isAdmin = writable();
export const screenmode = writable();