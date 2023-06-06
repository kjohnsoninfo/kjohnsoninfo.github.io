var counterContainer = document.querySelector(".website-counter");
var visitorCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitorCount) {
    visitorCount = Number(visitorCount) + 1;
    localStorage.setItem("page_view", visitorCount);
  } else {
    visitorCount = 1;
    localStorage.setItem("page_view", 1);
  }
  counterContainer.innerText = visitorCount;