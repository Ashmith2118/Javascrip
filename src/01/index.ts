function removeTransition(e: Event): void {
	const transitionEvent = e as TransitionEvent;
	if (transitionEvent.propertyName !== "transform") return;
	(e.target as HTMLElement).classList.remove("playing");
}

function playSound(e: KeyboardEvent): void {
	const audio = document.querySelector(
		`audio[data-key="${e.code}"]`
	) as HTMLAudioElement;
	const key = document.querySelector(
		`div[data-key="${e.code}"]`
	) as HTMLElement;
	if (!audio) return;

	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
}

const keys: HTMLElement[] = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
