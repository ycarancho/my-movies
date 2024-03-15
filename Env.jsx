var ENV = {};
var wLocate = window.location.hostname;
var locates = [
  {
    text: "localhost",
    url: "https://api.themoviedb.org/3/",
    app_env: "development",
  },
  {
    text: "api-site-tel",
    url: "http://localhost:8000/api/",
    app_env: "production",
  },
];

locates.map((l) => {
  if (wLocate == l.text)
    ENV = {
      APP_NAME: "My Movies",
      APP_ENV: l.app_env,
      BASE_URL: l.url,
    };
});

export { ENV };
