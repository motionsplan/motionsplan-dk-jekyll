# _plugins/rich_links.rb

# 1. Byg et lyn hurtigt opslagsværk (Hash) én gang, når Jekyll har læst sitet
Jekyll::Hooks.register :site, :post_read do |site|
  site.data['exercise_icons'] = {}
  
  if site.collections['exercises']
    site.collections['exercises'].docs.each do |doc|
      if doc.data['icon']
        # Gem ikonet på øvelsens URL
        site.data['exercise_icons'][doc.url] = doc.data['icon']
      end
    end
  end
end

# 2. Erstat links i teksten med ikoner under render
Jekyll::Hooks.register [:pages, :documents], :post_render do |page|
  # Spring over med det samme, hvis siden ikke er HTML eller ikke indeholder øvelseslinks
  next unless page.output && (page.output.include?("/oevelse/") || page.output.include?("/exercise/"))

  icons = page.site.data['exercise_icons'] || {}

  # Matcher både /oevelse/ og /exercise/
  page.output.gsub!(/<a href="(\/(?:oevelse|exercise)\/[^"]+)">([^<]+)<\/a>/) do
    href = Regexp.last_match(1)
    text = Regexp.last_match(2)

    # Lynhurtigt O(1) opslag
    icon = icons[href]

    if icon
      "<img style='height: 44px;' src='#{icon}' alt='#{text}'> <a href='#{href}'>#{text}</a>"
    else
      "<a href='#{href}'>#{text}</a>"
    end
  end
end