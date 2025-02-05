const breakPoint = 768

export const checkBreakPoint = (ev?: MediaQueryListEvent) => {
  const body = (typeof document !== 'undefined') ? document.querySelector<HTMLElement>('body') : '';
  const mql = window.matchMedia('screen and (max-width: ' + breakPoint + 'px)')
  let deviceFlg = mql.matches ? 1 : 0; // 0 : PC ,  1 : SP
  // → PC
  // if (deviceFlg == 0) {
  //   if (body) {
  //     body.style.top = ''
  //     body.style.position = ''
  //   }
  // } else {
  //   // →SP
  // }
  deviceFlg = mql.matches ? 1 : 0;

  return deviceFlg
}

