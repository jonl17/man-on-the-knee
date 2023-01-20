import { writable } from 'svelte/store'
import type { LookingDirection } from './types'

export const lookingDirection = writable<LookingDirection>('center')

export const pantsDragValue = writable(10)

export const started = writable(false)
