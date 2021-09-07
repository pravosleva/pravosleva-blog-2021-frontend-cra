export const MakeTimer = (ms: number = 3000) => {
  let socketTimer: NodeJS.Timeout

  return () => {
    const startTimer = (cb?: () => void) => {
      console.log("Timer started!")
      socketTimer = setTimeout(function () {
        // console.log("Timer done and will be restarted.")
        if (cb) cb()
        startTimer(cb)
      }, ms)
    };
    const stopTimer = () => {
      console.log("Timer stopped")
      clearTimeout(socketTimer)
    };
    return { startTimer, stopTimer }
  };
}