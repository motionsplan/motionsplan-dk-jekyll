<?php
date_default_timezone_set("Europe/Copenhagen");

require __DIR__ . '/../vendor/autoload.php';

use Motionsplan\Exercise\Pdf\Portrait;
use Motionsplan\Exercise\ExerciseInterface;
use Motionsplan\Exercise\ExerciseImageInterface;

$filename = __DIR__ . "/../_exercises/180-jump.md";

$str = file_get_contents($filename);

$parser = new Mni\FrontYAML\Parser();

$document = $parser->parse($str);

$yaml = $document->getYAML();
$html = $document->getContent();


class ExerciseImage implements ExerciseImageInterface
{
    protected $path;
    
    function __construct($path = __DIR__ . '/../assets/images/frontpage.jpg')
    {
        $this->path = $path;
    }

    public function getPath()
    {
        return $this->path;
    }
    public function getOrientation()
    {
        return 'portrait';
    }
}

class ExerciseAdapter implements ExerciseInterface
{
    protected $document;
    
    function __construct($document)
    {
        $this->document = $document;
    }
    
    public function getTitle()
    {
        return $this->document->getYaml()['title'];
    }
    public function getCues()
    {
        return 'My cues';
    }
    public function getIntroduction()
    {
        return $this->document->getYaml()['excerpt'];
    }
    public function getDescription()
    {
        return $this->document->Content();
    }
    public function getUrl()
    {
        return 'http://motionsplan.dk' . $this->document->getYaml()['permalink'];
    }

    /**
     * return array with ImageInterface[]
     */
    public function getImages()
    {
        
        $images = array();
        foreach ($this->document->getYaml()['gallery'] as $img) {
            $images[] = new ExerciseImage(__DIR__ . "/../" . $img['image_path']);
        }
        return $images;
    }

    public function getBarCode()
    {
        return null;
    }
}


$name = pathinfo($filename);

$filename =  __DIR__ . '/../assets/pdf/exercises/' . $name['filename'] . '.pdf';
$pdf = new Portrait();
$pdf->setTemporaryDirectory(__DIR__);
$pdf->setLogo(new ExerciseImage(__DIR__ . '/mp-logo.png'), 'http://motionsplan.dk');
$pdf->setContribLogo(new ExerciseImage(__DIR__ . '/vih_logo.jpg'), 'http://vih.dk');
$pdf->addNewPage(new ExerciseAdapter($document));
// This is not really testing the library - just to see whether functions works.
$pdf->Output($filename, 'F');
