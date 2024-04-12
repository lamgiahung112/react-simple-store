import { useCallback, useSyncExternalStore } from "react"

function createStore(createState) {
	const getState = () => state
	const setState = (nextState) => {
		state = nextState(state)
		listeners.forEach((l) => l())
	}
	let state = createState(setState)
	const listeners = new Set()
	const subscribe = (listener) => {
		listeners.add(listener)
		return () => listeners.delete(listener)
	}
	return { getState, setState, subscribe }
}
function _selfSelector(x) {
	return x
}
function useStore(store, selector = _selfSelector) {
	return useSyncExternalStore(
		store.subscribe,
		useCallback(() => selector(store.getState()), [store, selector]),
		() => selector(store.getState())
	)
}
export { useStore, createStore }
