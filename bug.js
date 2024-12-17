```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: The return value of setInterval is not used to clear the interval
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```