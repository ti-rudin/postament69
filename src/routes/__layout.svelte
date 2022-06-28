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

	onMount(() => {
	
	});
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

<div class="flex flex-col justify-center bg-white/70 px-4 dark:bg-gray-400/10 ">
	<Nav />
</div>
<main class=" flex flex-col justify-center bg-gray-100/50 px-4 pb-4 pt-3 dark:bg-gray-900 sm:px-8 transition-all ">
	<slot />
</main>

	<footer class="z-20 w-full mb-4 flex   flex-col  bg-gray-300 dark:bg-black/20 items-start justify-center">
		<div class="flex w-full  mx-auto max-w-4xl  px-4">
			<div class="flex flex-col">
				<a sveltekit:prefetch href="/" class="pt-4"> ПОСТАМЕНТ 69 </a>
				<a sveltekit:prefetch href="/about" class="pt-4"> О нас </a>

			</div>
			<div class="ml-4 flex flex-col">
				<a sveltekit:prefetch href="/feedback" class="pt-4"> Отзывы </a>
				<a sveltekit:prefetch href="/contacts" class="pt-4"> Контакты </a>
			</div>
			<div class="mx-auto" />
		</div>
		<div class="mt-5 flex w-full  flex-col">
			<div class="mx-auto mt-2 flex">
				<div class="lblock  text-right">2022<a class="px-1" href="/rights">©</a>Постамент 69</div>
				<a sveltekit:prefetch href="/privacy" class="lblock ml-3 pt-1 text-sm"> Условия использования</a>
			</div>
		</div>
	</footer>


<style>
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
