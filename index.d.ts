declare type Store<T> = {
	getState: () => T
	setState: (nextState: StateMapper<T>) => void
	subscribe: (listener: () => void) => () => void
}
declare type StateMapper<T> = (v: T) => T
declare type Selector<T, V = T> = (v: T) => V
declare type CreateStateFnc<T> = (set: (stateMapper: StateMapper<T>) => void) => T
declare function createStore<T>(createState: CreateStateFnc<T>): Store<T>
declare function useStore<T, V = T>(store: Store<T>, selector?: Selector<T, V>): V
export { useStore, createStore }
