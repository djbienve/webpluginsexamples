

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>

jkkgjgkj <br>
khjh <br>
j
kjkjkj <br>
 <br>jjkjkk

 <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>dfsdfsdf
 <br><br><br><br><br><br><br><br><br><br>dsfsfsdfs
 <br><br><br><br><br><br><br><br><br><br>sfdsdfsdfsd
 <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>adfsdfsdfsd
<barcode dimension="1D" type="EAN13" value="45" label="label" style="width:30mm; height:6mm; color: #770000; font-size: 4mm"></barcode> <br><br>
<qrcode value="Value to Coder" ec="H" style="width: 50mm; background-color: white; color: black;"></qrcode>
 <br>

 <p>
 	<b>Este plugins es muy potente, tienes muchas opciones para más información: <br></b><br>
 	<a href="https://github.com/spipu/html2pdf/tree/master/doc">https://github.com/spipu/html2pdf/tree/master/doc</a>
 </p>

<?php 


$content = ob_get_clean();
require __DIR__.'/vendor/autoload.php';
use Spipu\Html2Pdf\Html2Pdf;
$html2pdf = new Html2Pdf('P','A4','fr','UTF-8');
//$pdf = new \Spipu\Html2Pdf\Html2Pdf('P','A4','en', false, 'UTF-8', array(mL, mT, mR, mB)); 
$html2pdf->writeHTML($content);
$html2pdf->output('nombre.pdf');

?> 
