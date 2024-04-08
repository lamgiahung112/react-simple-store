# React Simple Store

## Description

`react-simple-store` is a hyper lightweight state manager for React. It provides a simple API to create and use stores within your components, offering an easy way to manage state without the complexity of larger state management libraries.

## How to Use

### 1. Declare a Store

```javascript
import { createStore } from '@lamgiahung112/react-simple-store';

const store = createStore<{
    count1: number,
    count2: number,
    inc1: () => void,
    inc2: () => void
}>((set) => ({
    count1: 0,
    count2: 0,
    inc1: () => {
        set((prev) => ({
            ...prev,
            count1: prev.count1 + 1,
        }))
    },
    inc2: () => {
        set((prev) => ({
            ...prev,
            count2: prev.count2 + 1,
        }))
    },
}));
```

### 2. Use it everywhere in you React app with useStore hook
```javascript
    import { useStore } from 'react-simple-store';

    const YourComponent = () => {
        const { count1, inc1 } = useStore(store);

        return (
            <div>
                <p>Count 1: {count1}</p>
                <button onClick={inc1}>Increment Count 1</button>
            </div>
        );
    };
```

## Notes

- **Selector Must Not Return an Object**: Avoid returning an object from your selector function as it may cause infinite looping on the client-side.