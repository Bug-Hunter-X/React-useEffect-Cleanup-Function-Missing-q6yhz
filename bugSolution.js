```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // Correct: Return a cleanup function
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```