import { Page, routing } from ".././ui/navigationTracking";
import { StormTechLabRoot } from "./ui/StormTechLabRoot";
import * as React from "react";
import * as ReactDOM from "react-dom";

let container: HTMLElement;
(function() {
	function set() {
	    const elem = document.getElementById("stormtech-lab-container");
	    if (elem == null) {
	    	const msg = "Could not find element 'stormtech-lab-container'";
	    	console.error(msg);
	    	throw Error(msg);
	    }
	    container = elem!;
	    document.removeEventListener("DOMContentLoaded", set);
	}
	document.addEventListener("DOMContentLoaded", set);
})()

export type IStormTechLab = {};

export let StormTechLab: IStormTechLab;

export function displayStormTechLabContent() {
    if (!routing.isOn(Page.StormTechLab)) {
        return;
    }

    const castedStormTechLab = StormTechLab as IStormTechLab;
    ReactDOM.render(
        <StormTechLabRoot />,
        container
    )
}