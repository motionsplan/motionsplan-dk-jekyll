# _plugins/rich_links.rb
Jekyll::Hooks.register [:pages, :documents], :post_render do |page|
    puts "[RichLinkPlugin] Hooked into #{page.url}"
  
    # Do your replacement here
    if page.output.include?("/exercise/")
      page.output.gsub!(/<a href="(\/exercise\/[^"]+)">([^<]+)<\/a>/) do
        href = Regexp.last_match(1)
        text = Regexp.last_match(2)
        post = page.site.collections['exercises'].docs.find { |d| d.url == href }
        if post && post.data['icon']
          icon = post.data['icon']
          "<img style='height: 44px;' src='#{icon}' alt='#{text}'> <a href='#{href}'>#{text}</a>"
        else
          "<a href='#{href}'>#{text}</a>"
        end
      end
    end
  end
  