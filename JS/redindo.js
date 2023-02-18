function redirectToSocialindo() {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/iPhone/i)) {
    window.location.href = "https://playabledownload.com/show.php?l=0&u=1182222&id=49974&tracking_id=";
  } else if (userAgent.match(/Android/i)) {
    window.location.href = "https://playabledownload.com/show.php?l=0&u=1182222&id=49967&tracking_id=";
  } else {
    window.location.href = "https://playabledownload.com/show.php?l=0&u=1182222&id=51619&tracking_id=";
  }
}
