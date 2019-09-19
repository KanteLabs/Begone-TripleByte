window.onload = () => {
  const body = document.querySelector('body');
  removeTripleByteAds();
  trackNewContent(body);
};

const trackNewContent = (body) => {
  const resizeObserver = new ResizeObserver(removeTripleByteAds);
  resizeObserver.observe(body);
}

const removeTripleByteAds = () => {
  const tripleByteAds = document.querySelectorAll("div[data-author='Triplebyte_official']");
  tripleByteAds.forEach((ad) => ad.remove());
}