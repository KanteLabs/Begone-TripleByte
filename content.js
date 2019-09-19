window.onload = () => {
  const body = document.querySelector('body');
  removeTripleByteAds();
  trackNewContent(body);
};

const searchTerm = "div[data-author='Triplebyte_official']";

const trackNewContent = (body) => {
  const resizeObserver = new ResizeObserver(removeTripleByteAds);
  resizeObserver.observe(body);
}

const removeTripleByteAds = () => {
  const tripleByteAds = document.querySelectorAll(searchTerm);
  tripleByteAds.forEach((ad) => ad.remove());
}