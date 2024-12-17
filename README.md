# React setInterval Memory Leak

This repository demonstrates a common memory leak in React components that use the `setInterval` function within the `useEffect` hook without properly clearing the interval.  The example shows how to fix this issue.

## Bug
The `bug.js` file contains a React component that uses `setInterval` to update a counter every second. However, the interval ID is not stored or cleared, leading to a memory leak. Each time the component renders, another interval is started without stopping the previous one, resulting in a continuously growing number of active intervals.

## Solution
The `bugSolution.js` file provides the corrected code.  It stores the interval ID in a state variable and uses the `clearInterval` function in the cleanup function of the `useEffect` hook to stop the interval when the component unmounts or when the dependency array changes.