export const waitFor = (msTime) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, msTime);
  });
}