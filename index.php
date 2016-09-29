<?php
	session_start();

  if (!isset($_SESSION['note'])) {
    $_SESSION["note"] = trim(' ');  
  }
  
	$note = $_SESSION["note"];
	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		$_SESSION["note"] = $_POST['n-c'];
		$note = $_SESSION["note"];
	}
	// print_r($_SESSION);
?>
<!DOCTYPE HTML >
<html lang="en">
	<head>
		<title>scrtchpdLite</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="favicon.ico" rel="icon" type="image/x-icon" />
		<link href="_/c/i.css" rel="stylesheet">
        <meta name="description" content="Write something. Throw it away.">
	</head>
	<body>
		<form method="post" name="post">
        <textarea id="n-c" name="n-c" placeholder="This is scrtchpd, a simple app where you can write notes when you need them. 

Notes are saved in your browser, using localStorage. So if you accidentally close your browser without saving your note, don&#8217;t worry, it&#8217;ll be here when you come back. 

To get started, just start typing!"><?php echo htmlspecialchars($note); ?></textarea>
				<div id="s-w"><button class="s m-b">save</button></div>
    </form>
    <section class="bb">
      	<div id="n-d" class="h">
          <div class="s-s g">
            <label>Adjust Type Size</label>
            <div class="m-b" onclick="scrtchpd.resizeText('5')">
              <svg class="i" viewBox="0 0 43.2 43.2"><polygon points="43.2 18.6 24.6 18.6 24.6 0 18.6 0 18.6 18.6 0 18.6 0 24.6 18.6 24.6 18.6 43.2 24.6 43.2 24.6 24.6 43.2 24.6 "/></svg>
            </div>
            <div class="m-b" onclick="scrtchpd.resizeText('-5')">
              <svg class="i" viewBox="0 0 43.2 43.2"><rect x="18.6" transform="matrix(4.492033e-11 1 -1 4.492033e-11 43.2264 -1.105931e-9)" width="6" height="43.2"/></svg>
            </div>
            <a href="#" class="t-i r" onclick="scrtchpd.resetText('22')">Reset Size</a>
          </div>
          <div class="s-s g t">
            <label>Adjust Type Style</label>
              <a href="#" id="t-ss" onclick="scrtchpd.fontStyleToggle('sans')">Sans-Serif</a>
              <a href="#" id="t-s" onclick="scrtchpd.fontStyleToggle('serif')">Serif</a>
          </div>
      		<div class="s-s ">
            <label>Details</label>
        		<p>Word Count: <strong id="w-c"></strong></p>
            <p>Character Count: <strong id="c-c"></strong></p>
          </div>
          <div class="s-s">
        		<a class="c-n" href="#" onclick="scrtchpd.clearPad()">Clear Note Pad</a>
          </div>
        </div>
        <div id="b" class="m-b n-d-i h" onclick="scrtchpd.tooltipToggle()">
            <svg class="i" viewBox="0 0 16 15.3"><path class="st0" d="M2.4 9c0.2 0.6 0.4 1.2 0.7 1.7l-0.9 0.9c-0.4 0.4-0.4 0.7 0 1l0.9 0.9c0.4 0.4 0.6 0.4 1 0l1-1c0.5 0.3 1 0.5 1.5 0.6v1.2c0 0.6 0.2 0.8 0.7 0.8h1.3c0.5 0 0.7-0.2 0.7-0.8v-1.2c0.5-0.1 1-0.3 1.5-0.6l1 1c0.4 0.4 0.7 0.4 1 0.1l0.9-0.9c0.4-0.4 0.4-0.6-0.1-1l-1-1c0.3-0.5 0.6-1.1 0.7-1.7h1.3c0.5 0 0.7-0.2 0.7-0.8V7.1c0-0.6-0.2-0.8-0.7-0.8h-1.3c-0.1-0.5-0.3-1-0.6-1.5l0.9-0.9c0.4-0.4 0.4-0.7 0.1-1L13 1.9c-0.4-0.4-0.6-0.4-1 0.1l-0.9 0.9C10.6 2.5 10 2.3 9.4 2.1V0.9c0-0.6-0.2-0.8-0.7-0.8H7.4c-0.5 0-0.7 0.2-0.7 0.8v1.2C6 2.3 5.4 2.5 4.9 2.8L4 2C3.6 1.6 3.4 1.6 3 1.9L2.1 2.8c-0.4 0.4-0.4 0.6 0.1 1L3 4.8c-0.3 0.5-0.5 1-0.6 1.5H1.2c-0.5 0-0.7 0.2-0.7 0.8v1.2C0.5 8.8 0.7 9 1.2 9H2.4zM5.8 7.7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2S9.2 9.9 8 9.9 5.8 8.9 5.8 7.7z"/></svg>
        </div>
    </section>
		<!-- <script src="_/j/i.min.js"></script> -->
		<script src="/src/i.js"></script>

    <!--[if !IE]>
      // Because IE doesn't want to show placeholder on focus.
      <script>
        scrtchpd.focusNote();
      </script>
    <![endif]-->
	</body>
</html>