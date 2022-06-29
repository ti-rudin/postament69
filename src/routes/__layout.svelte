<script>
	import {
		SITE_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		isDarkFlag
	} from '$lib/siteConfig';

	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
	import { screenmode } from '$lib/siteConfig';
	import { isAuthenticated, user } from '$lib/stores/auth';
	import { onMount } from 'svelte';

	import { browser } from '$app/env';

	onMount(() => {});
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + SITE_TITLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div class="flex flex-col justify-center bg-white/70 px-4  dark:bg-gray-400/10 ">
	<Nav />
</div>
<main
	class=" flex flex-col  justify-center bg-gray-100/50 px-4  py-2 pt-3 transition-all  dark:bg-gray-900 "
>
	<div class=" mx-auto  flex  w-full max-w-4xl">
		<div class="sidemenu">
			<ul class="menu flex flex-col text-sm  uppercase dark:bg-gray-900">
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/pamyatniki">Памятники</a>
				</li>
				<li
					class="border-b border-gray-300  font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/econom">&nbsp;&nbsp;&nbsp;Экономичные</a>
				</li>
				<li
					class="border-b border-gray-300  font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/vertical">&nbsp;&nbsp;&nbsp;Вертикальные</a>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/gorizontal">&nbsp;&nbsp;&nbsp;Горизонтальные</a>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/arki-kolonny">&nbsp;&nbsp;&nbsp;Арки и колонны</a>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/s-krestom">&nbsp;&nbsp;&nbsp;С крестом</a>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/elit">&nbsp;&nbsp;&nbsp;Элитные</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/complex">Комплексы</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/ogrady">Ограды</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/cvetniki">Цветники</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/plity">Надгробные плиты</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/stoly-lavki">Столы и лавочки</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/oformlenie">Оформление</a>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/fotoceramic">&nbsp;&nbsp;&nbsp;Фотокерамика</a>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/foto-na-stekle">&nbsp;&nbsp;&nbsp;Фото на стекле</a>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/bukvy-iz-metalla">&nbsp;&nbsp;&nbsp;Буквы из металла</a
					>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/skarpel-pozolota"
						>&nbsp;&nbsp;&nbsp;Скарпель и Позолота</a
					>
				</li>
				<li
					class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/peskostrui">&nbsp;&nbsp;&nbsp;Пескоструй</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/plitka">Плитка</a>
				</li>
				<li
					class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/tablichki">Таблички</a>
				</li>
				<li
					class=" border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
					style="transition-delay: 150ms;"
				>
					<a class="flex w-auto py-2" href="/gravirovka">Гравировка</a>
				</li>

			</ul>
		</div>
		<slot />
	</div>
</main>

<footer
	class="z-20 mb-4 flex w-full   flex-col  items-start justify-center bg-gray-300 dark:bg-black/20"
>
	<div class="mx-auto   flex max-w-4xl  px-4">
		<div class="flex flex-col">
			<a href="/" class="pt-4">Главная </a>
		</div>
		<div class="ml-4 flex flex-col">
			<a href="/about" class="pt-4"> О нас </a>
		</div>

		<div class="ml-4 flex flex-col">
			<a href="/contacts" class="pt-4"> Контакты </a>
		</div>
		<div class="mx-auto" />
	</div>
	<div class="mt-3 flex w-full  flex-col">
		<div class="mx-auto flex">
			<div class="lblock  text-right">2022<a class="px-1" href="/rights">©</a>Постамент 69</div>
		</div>
	</div>
</footer>

<style>
	.sidemenu {
		margin-right: 1rem;
	}
	@media (max-width: 768px) {
		.sidemenu {
			display: none;
		}
	}

	.feedback {
		color: orange;
	}
	.lblock {
		width: auto;
	}
	.container_develop a {
		display: block;
	}
	.container_develop {
		-webkit-perspective-origin: center 40px;
		perspective-origin: center 40px;
	}
	.cub_container .side,
	.cub_container {
		width: 40px;
		height: 40px;
		text-align: left;
		color: #465ee0;
	}

	.cub_container p {
		font-size: 12px;
		line-height: 14px;
	}
	.cub_container {
		margin-left: 20px;
		margin-top: 20px;
		-webkit-transition: ease-in-out 0.4s all;
		transition: ease-in-out 0.4s all;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}
	.cub_container:hover {
		-webkit-transform: rotateY(-90deg);
		transform: rotateY(-90deg);
	}
	.cub_container .side {
		position: absolute;
		width: 40px;
		height: 40px;
	}
	.cub_container .front {
		-webkit-transform: translateZ(100px);
		transform: translateZ(100px);
		background-color: rgba(0, 8, 51, 0);
	}
	.cub_container .right {
		right: 15rem;
		text-align: right;
		width: 130px;
		-webkit-transform: translateX(40px) translateZ(10px) rotateY(90deg);
		transform: translateX(40px) translateZ(10px) rotateY(90deg);
	}
</style>
