<?php

header("Content-type: image/png");
$string = 'MOTIONSPLAN.DK';
//$im     = imagecreatefrompng("./../assets/images/blog/bedste-kombination-af-loeb-og-styrketraening.jpg");
//$im = imagecrop($im, 0, 0, 1000, 1500);
$image = imagecreate(1000, 1500);
$orange = imagecolorallocate($image, 220, 210, 60);
$px     = (imagesx($image) - 7.5 * strlen($string)) / 2;
imagestring($image, 3, $px, 9, $string, $orange);
$text_color = imagecolorallocate($image, 255, 255, 255);
imagestring($image, 5, 180, 100,  $string, $text_color); 

imagepng($image, 'picture.png');
imagedestroy($image);
