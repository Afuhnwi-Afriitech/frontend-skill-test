function initCustomScroll(containerSelector, contentSelector, thumbSelector) {
  const container = document.querySelector(containerSelector);
  const content = container.querySelector(contentSelector);
  const thumb = container.querySelector(thumbSelector);

  let isDragging = false;
  let startY;
  let startScrollTop;

  function updateThumb() {
    const scrollHeight = content.scrollHeight - content.clientHeight;
    const trackHeight = container.clientHeight - thumb.clientHeight;
    const scrollRatio = content.scrollTop / scrollHeight;
    thumb.style.top = scrollRatio * trackHeight + 'px';
  }

  thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startScrollTop = content.scrollTop;
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    const scrollHeight = content.scrollHeight - content.clientHeight;
    const trackHeight = container.clientHeight - thumb.clientHeight;
    content.scrollTop = startScrollTop + (deltaY * scrollHeight / trackHeight);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = 'auto';
  });

  content.addEventListener('scroll', updateThumb);
  updateThumb();
}

initCustomScroll('.first-scroll-parent', '.first-scroll-content', '.first-scroll-thumb');
initCustomScroll('.second-scroll-parent', '.second-scroll-content', '.second-scroll-thumb');
initCustomScroll('.three-scroll-parent', '.scroll-content-three', '.three-scroll-thumb');
