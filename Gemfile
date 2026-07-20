source "https://rubygems.org"

gem "jekyll", "~> 4.4"
gem "minimal-mistakes-jekyll", "~> 4.28"
gem "liquid-c"
gem 'faraday-retry'

group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-feed"
  gem "jekyll-redirect-from"
  gem "jekyll-gist"
  gem "jekyll-sitemap"
  gem "jekyll-include-cache"
  gem "jemoji"
  gem 'jekyll-brotli'
end

group :math do
  gem "numo-narray"
  gem "numo-linalg"
  gem "gsl", git: "https://github.com/SciRuby/rb-gsl.git", ref: "103a3e1"
  gem "classifier-reborn"
end

group :development, :test do
  gem "html-proofer"
end
