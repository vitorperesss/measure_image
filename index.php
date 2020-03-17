<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Image Meter</title>
</head>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="style/style.css">
<script type="text/javascript" src="js/main.js"></script>

<body>
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


