import { writable } from 'svelte/store'
import type { LookingDirection } from './types'

export const lookingDirection = writable<LookingDirection>('center')
