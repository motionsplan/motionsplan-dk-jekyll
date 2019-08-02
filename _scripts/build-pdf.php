<?php
date_default_timezone_set("Europe/Copenhagen");

require __DIR__ . '/../vendor/autoload.php';

use Motionsplan\Exercise\Pdf\Portrait;
use Motionsplan\Exercise\ExerciseInterface;
use Motionsplan\Exercise\ExerciseImageInterface;

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
        if (!is_array($this->document->getYaml()['gallery'])) return array();
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
    
    function __destruct()
    {
        $this->document = null;
    }
}


//Get a list of file paths using the glob function.
$fileList = glob(__DIR__ . "/../_exercises/*");
 
//Loop through the array that glob returned.
foreach ($fileList as $filename){
    $str = file_get_contents($filename);
    $name = pathinfo($filename);
    
    $parser = new Mni\FrontYAML\Parser();
    $document = $parser->parse($str);
    
    unset($parser);
    
    $filename =  __DIR__ . '/../assets/pdf/exercises/' . $name['filename'] . '.pdf';
    $pdf = new Portrait();
    $pdf->setTemporaryDirectory(__DIR__);
    $pdf->setLogo(new ExerciseImage(__DIR__ . '/../assets/images/mp-logo.png'), 'http://www.motionsplan.dk');
    $pdf->setContribLogo(new ExerciseImage(__DIR__ . '/../assets/images/vih_logo.jpg'), 'http://www.vih.dk');
    $pdf->addNewPage(new ExerciseAdapter($document));
    // This is not really testing the library - just to see whether functions works.
    $pdf->Output($filename, 'F');
    
    unset($document);
    unset($pdf);
    
    flush();
}
