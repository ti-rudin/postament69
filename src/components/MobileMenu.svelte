<script>
	let isOpen = false;
	let isMenuRendered;
	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<div class="ml-[-0.60rem] md:hidden">
	<button
		class="burger visible"
		aria-label="Toggle menu"
		type="button"
		on:click={() => (isOpen = !isOpen)}
	>
		{#if !isOpen}
			<svg
				class="absolute h-5 w-5 text-gray-900 dark:text-gray-100"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				><path
					d="M2.5 7.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M2.5 12.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		{:else}
			<svg
				class="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
				shape-rendering="geometricPrecision"
				data-hide="true"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg
			>
		{/if}
	</button>
	{#if isOpen}
		<ul
			class="menu absolute flex flex-col bg-gray-50 text-xl  uppercase dark:bg-gray-900"
			class:menuRendered={isMenuRendered}
		>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/">Главная</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/pamyatniki">Памятники</a
				>
			</li>
			<li
				class="border-b border-gray-300  font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/econom">&nbsp;&nbsp;&nbsp;Экономичные</a
				>
			</li>
			<li
				class="border-b border-gray-300  font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/vertical">&nbsp;&nbsp;&nbsp;Вертикальные</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/gorizontal">&nbsp;&nbsp;&nbsp;Горизонтальные</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/arki-kolonny">&nbsp;&nbsp;&nbsp;Арки и колонны</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/s-krestom">&nbsp;&nbsp;&nbsp;С крестом</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/elit">&nbsp;&nbsp;&nbsp;Элитные</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/complex">Комплексы</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/ogrady">Ограды</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/cvetniki">Цветники</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/plity">Надгробные плиты</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/stoly-lavki">Столы и лавочки</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/oformlenie">Оформление</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/fotoceramic">&nbsp;&nbsp;&nbsp;Фотокерамика</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/foto-na-stekle">&nbsp;&nbsp;&nbsp;Фото на стекле</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/bukvy-iz-metalla">&nbsp;&nbsp;&nbsp;Буквы из металла</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/skarpel-pozolota">&nbsp;&nbsp;&nbsp;Скарпель и Позолота</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-normal text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/peskostrui">&nbsp;&nbsp;&nbsp;Пескоструй</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/plitka">Плитка</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/tablichki">Таблички</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/gravirovka">Гравировка</a
				>
			</li>



			<div class="h-5" />
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/about">О компании</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/works">Работы</a
				>
			</li>
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					sveltekit:prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/contacts">Контакты</a
				>
			</li>

			<!--
			<li
				class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
				style="transition-delay: 400ms;"
			>
				<a
					class="flex w-auto pb-4"
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="https://github.com/sw-yx/swyxkit">GitHub</a
				>
			</li>
			 <li
			class="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold"
			style="transition-delay: 325ms;"
		>
			<a class="flex w-auto pb-4" on:click={() => setTimeout(() => isOpen = false, 200)} href="/tweets">Tweets</a>
		</li> -->
		</ul>
	{/if}
</div>

<style lang="scss">
	.burger {
		transition: opacity 300ms ease;
		border: 0;
		background: transparent;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.burger svg {
		transform: translate(-50%, -50%) scale(1);
		top: 50%;
		left: 50%;
		opacity: 1;
		transition: opacity 300ms ease, transform 300ms ease;
	}

	.menu {
		padding: 0 180px 0 4px;
		margin: 0;
		padding-bottom: 70px;
		padding-top: 24px;
		padding-left: 19px;
		width: calc(99vw - 4px);
		left: -16px;
		height: auto;
		z-index: 1000;
		opacity: 0;
		top: 4.3rem;

		transition: opacity 300ms ease, transform 300ms ease;
	}

	.menu li {
		transform: translateX(-16px);
		opacity: 0;
		transition: opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;
		width: 0px;
		white-space: nowrap;
	}

	.menuRendered {
		opacity: 1;
	}

	.menuRendered li {
		@apply w-full border-gray-400 dark:border-gray-600;
		transform: translateX(0);
		opacity: 1;
	}

	.menu > * + * {
		margin-top: 24px;
	}

	@keyframes grow {
		0% {
			height: 0px;
		}
		100% {
			height: 24px;
		}
	}
</style>
