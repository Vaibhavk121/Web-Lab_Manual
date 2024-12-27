<?php
$counterfile="visitorcount.txt";
if(!file_exists($counterfile)){
    
file_put_contents($counterfile,'0');

}

$visitorcount=(int)file_get_contents($counterfile);

$visitorcount++;

file_put_contents($counterfile, $visitorcount);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visitorcount</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to our Website!!</h1>
        <h2>Number of Visitors</h2>
        <p>The Number of visitors to this page is <?php echo $visitorcount;?></p>
    </div>
    
</body>
</html>