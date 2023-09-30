import { setFavicon } from "cookies-ds";

setFavicon();

applyLoading()
	.catch(console.error);

async function applyLoading() {
	await new Promise(r => setTimeout(r, 3500));
	const panel: HTMLElement = getPanel2();
	panel.setAttribute("loading", "0");
	await new Promise(r => setTimeout(r, 200));
	panel.setAttribute("loading", "20");
	await new Promise(r => setTimeout(r, 500));
	panel.setAttribute("loading", "50");
	await new Promise(r => setTimeout(r, 1000));
	panel.setAttribute("loading", "100");
}


function getPanel2(): HTMLElement {
	const panel: HTMLElement | null = document.getElementById("panel2");

	if (panel === null) {
		throw new Error("Panel not found !");
	}

	return panel;
}
