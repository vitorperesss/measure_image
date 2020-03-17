<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Image Meter</title>
</head>

<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<link rel="stylesheet" type="text/css" href="style/style.css">
<script type="text/javascript" src="js/main.js"></script>

<body>
	<img id="imagem" src="img/f2.jpeg" style="display: none">
	<div class="controles">
		<label id="undo" data-tooltip="Voltar"><img src="icon/baseline_reply_white_24dp.png" class="voltar hover"></label>
		<label data-tooltip="Upload" class="custom-file-upload">
			<img src="icon/baseline_cloud_download_white_24dp.png" class="download hover">
			<input type="file" id="imageLoader"/>
		</label>
	</div>
		<canvas id="canvas" width="600" style="text-align: center;"></canvas>
</body>
</html>


