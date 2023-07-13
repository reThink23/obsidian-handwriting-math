import { writable } from "svelte/store";
import type HelloWorldPlugin from "./main";

const plugin = writable<HelloWorldPlugin>();
export default { plugin };