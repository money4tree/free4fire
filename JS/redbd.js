function redirectToSocialBD() {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/iPhone/i)) {
    window.location.href = "https://playabledownload.com/show.php?l=0&u=1182222&id=50606&tracking_id=";
  } else if (userAgent.match(/Android/i)) {
    window.location.href = "https://playabledownload.com/show.php?l=0&u=1182222&id=49320&tracking_id=";
  } else {
    window.location.href = "https://playabledownload.com/show.php?l=0&u=1182222&id=50604&tracking_id=";
  }
}
