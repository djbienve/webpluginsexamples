<?php
	
	$img = $_POST['imgBase64'];
	//lo comentado es como guardarlo en un archivo real
	//$img = str_replace('data:image/png;base64,', '', $img);
	//$img = str_replace(' ', '+', $img);
	//$data = base64_decode($img);
	//$file = UPLOAD_DIR . uniqid() . '.png';
	//$success = file_put_contents($file, $data);
	//send request to ocr 

	//print $success ? $file : 'Unable to save the file.';
	//echo '<img  src="'.$img.'" alt="lo recibido"/>';
	echo $img;
?>