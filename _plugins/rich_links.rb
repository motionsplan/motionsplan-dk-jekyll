# _plugins/rich_links.rb

# 1. Byg et hurtigt opslagsværk med ALLE URL-variationer
Jekyll::Hooks.register :site, :post_read do |site|
  site.data['exercise_icons'] = {}
  
  if site.collections['exercises']
    site.collections['exercises'].docs.each do |doc|
      icon = doc.data['icon']
      next unless icon

      # Gem URL'en både MED og UDEN skråstreg i enden, 
      # så opslaget (O(1)) aldrig slår fejl pga. URL-formatering.
      clean_url = doc.url.chomp('/')
      site.data['exercise_icons'][clean_url] = icon
      site.data['exercise_icons']["#{clean_url}/"] = icon
    end
  end
end

# 2. Erstat links i HTML-outputtet
Jekyll::Hooks.register [:pages, :documents], :post_render do |page|
  # Kør KUN på HTML-filer (undgå RSS, XML, JSON) og kun hvis relevante stier findes
  next unless page.output && page.extname == '.html'
  next unless page.output.include?('/oevelse/') || page.output.include?('/exercise/')

  icons = page.site.data['exercise_icons'] || {}
  next if icons.empty?

  # Regex forklaring:
  # - Matcher <a> tags med /oevelse/ eller /exercise/
  # - Håndterer ekstra attributter (fx class="...", id="...")
  # - Håndterer HTML inde i linket (fx <a><strong>Bænkpres</strong></a>)
  page.output.gsub!(/<a\s+([^>]*?\s+)?href="(\/(?:oevelse|exercise)\/[^"#?]+)(?:\/)?([^"#?]*)"([^>]*)>(.*?)<\/a>/im) do |match|
    before_href = Regexp.last_match(1) || ''
    href_path   = Regexp.last_match(2) # fx /oevelse/baenkpres
    extra_params = Regexp.last_match(3) || '' # query params / ankre hvis nogen
    after_href  = Regexp.last_match(4) || ''
    content     = Regexp.last_match(5)

    # Hvis linket I FORVEJEN indeholder et billede, gør vi intet (forhindrer dobbelt-ikoner)
    if content.include?('<img')
      match
    else
      icon = icons[href_path]

      if icon
        # Byg det nye link med tilgængeligt billede og CSS-klasse
        "<img style='height: 44px;' class=\"exercise-icon\" src=\"#{icon}\" alt=\"\" aria-hidden=\"true\"> <a #{before_href}href=\"#{href_path}/#{extra_params}\"#{after_href}>#{content}</a>"
      else
        match
      end
    end
  end
end