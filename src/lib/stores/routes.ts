import { writable } from 'svelte/store';
import { loadData } from './localStroage';
import { defaultConnections } from '$lib/const/defaultConnections';

export const routesStore = writable(loadData('routes') || defaultConnections);