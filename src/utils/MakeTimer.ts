enum EState {
  STOPPED = 'stopped',
  STARTED = 'started',
}

export const MakeTimer = (ms: number = 3000) => {
  let timer: NodeJS.Timeout
  let state: EState = EState.STOPPED
  const log = (msg: string) => {
    console.log(msg, state)
  }

  return () => {
    const start = (cb?: () => void) => {
      timer = setTimeout(function () {
        // log("Timer done and will be restarted.")
        if (cb) cb()
        start(cb)
      }, ms)
      state = EState.STARTED
      log("ON")
    };
    const stop = () => {
      clearTimeout(timer)
      state = EState.STOPPED
      log("OFF")
    };
    return {
      start,
      stop,
      ms,
      state,
    }
  };
}