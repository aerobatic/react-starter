(function() {
  var logoSrc = __config__.cdnUrl + "/images/aerobatic-logo.png";

  React.render(
    <LogoBanner logoText="Aerobatic React Starter Template" logoSrc={logoSrc} />,
    document.getElementById('banner')
  );
})();