import { writable } from 'svelte/store';
import { loadData } from './localStroage';
import { defaultConnections } from '$lib/const/defaultConnections';

export const connectionsStore = writable(loadData('connections') || defaultConnections)