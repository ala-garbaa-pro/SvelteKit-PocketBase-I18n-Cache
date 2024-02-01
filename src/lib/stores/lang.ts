import { writable } from "svelte/store";

export const selectedLang = writable<string>("en");