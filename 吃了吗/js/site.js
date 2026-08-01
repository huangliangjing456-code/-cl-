(() => {
  const frame = document.querySelector('#app-frame');
  if (!frame) return;

  frame.addEventListener('load', () => {
    document.title = frame.contentDocument?.title
      ? `EAT · ${frame.contentDocument.title}`
      : 'EAT · 今天吃什么';
  });
})();
