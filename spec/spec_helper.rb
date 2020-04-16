# Require all of the necessary gems
require 'rspec'
require 'capybara/rspec'
require 'rack/jekyll'
require 'rack/test'
require 'pry'
require 'webdrivers'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
  # Configure Capybara to use Selenium.
  Capybara.register_driver :selenium do |app|
    chrome_prefs = {
      'download' => {
        'default_directory' => './support/',
        'prompt_for_download' => false
      },
      'profile' => {
        'default_content_settings' => { 'multiple-automatic-downloads': 1 }, # for chrome version olde ~42
        'default_content_setting_values' => { 'automatic_downloads': 1 }, # for chrome newe 46
        'password_manager_enabled' => false
      },
      'safebrowsing' => {
        'enabled' => false,
        'disable_download_protection' => true
      }
    }
  
    # Set headless with docker friendly args.
    chrome_args = %w[window-size=1024,768 disable-gpu no-sandbox disable-translate no-default-browser-check disable-popup-blocking]
    # To run full browser instead of headless mode, run this command: HEADLESS=false rspec spec
    unless ENV.fetch('HEADLESS', 'true') == 'false'
      chrome_args += %w[headless]
    end
  
    # Initialize chromedriver.
    capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
      chromeOptions: {
        prefs: chrome_prefs,
        args: chrome_args
      }
    )
    driver = Capybara::Selenium::Driver.new(app, browser: :chrome, desired_capabilities: capabilities)
  
    driver
  end
  # Configure Capybara to load the website through rack-jekyll.
  # (force_build: true) builds the site before the tests are run,
  # so our tests are always running against the latest version
  # of our jekyll site.
  Capybara.app = Rack::Jekyll.new(force_build: true)
end
