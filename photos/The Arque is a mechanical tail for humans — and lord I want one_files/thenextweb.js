(function () {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//link.monetizer101.com/widget/pc/app.bundle.js';
  s.onload = function () {
    new PriceComparison({
      domain: "link.monetizer101.com",
      shopId: 1179,
      isoCurrencyCode: "USD",
      isoLanguageCode: "en",
      geolocation: true,
      resultLimit: 4
    });
  };
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
})();

(function () {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//link.monetizer101.com/widget/intext/app.bundle.js';
  s.onload = function () {
    new inText({
      domain: "link.monetizer101.com",
      shopId: 1179,
      isoCurrencyCode: "USD",
      isoLanguageCode: "en",
      geolocation: true
    });
  };
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
})();

