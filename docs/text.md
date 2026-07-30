how would you modify this useEffect:

useEffect(() => {
    if(gameStarted && health <= 0) setGameOver(true)
  }, [gameStarted, health])

  to fix this error:

  error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:
* Update external systems with the latest state from React.
* Subscribe for updates from some external system, calling setState in a callback function when external state changes.