<?php

// Wallsticker
$xml = 'https://www.partner-ads.com/dk/feed_udlaes2.php?partnerid=28187&bannerid=71238&feedid=1523';
$search = 'yoga';

$xmldata = simplexml_load_file($xml) or die("Failed to load");
$i = 0;
foreach($xmldata->children() as $p) {         
    if (strpos(strtolower($p->produktnavn), $search) === false) {
        continue;
    }
    
    $product[$i]['title'] = $p->produktnavn;     
    $product[$i]['excerpt'] = $p->beskrivelse;     
    $product[$i]['price'] = $p->nypris;        
    $product[$i]['image_path'] = $p->billedurl; 
    $product[$i]['url'] = $p->vareurl; 

    $i++;
}

$output = '';

foreach ($product as $p) {

$output .= '
  - image_path: ' . $p['image_path']. '
    url: ' . $p['url']. '
    title: ' . $p['title'];
}

print $output;

/*
<produkt>
<forhandler>Wallstickerland</forhandler>
<kategorinavn>2334</kategorinavn>
<brand>Wallstickerland.dk</brand>
<produktnavn>Rengøringsdame - Banksy</produktnavn>
<produktid>10</produktid>
<beskrivelse>Værket "Maid" af gadekunstneren Banksy fås nu som wallsticker, hvor en rengøringsdame fejer skidt ind under tapetet. En anderledes og tankevækkende dekoration, som du kan få hjem til din egen væg.</beskrivelse>
<nypris>299.00</nypris>
<lagerantal>in stock</lagerantal>
<color>black</color>
<billedurl>https://www.wallstickerland.dk/media/catalog/product/b/a/banksy-stuepige.jpg</billedurl>
<vareurl>https://www.partner-ads.com/dk/klikbanner.php?bannerid=44221&partnerid=28187&htmlurl=https://www.wallstickerland.dk/rengoringsdame-banksy-wallsticker</vareurl>
</produkt>
*/