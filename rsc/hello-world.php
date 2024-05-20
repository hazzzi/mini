<?php 
    $author = "Jae Doe";
    $post_content = @file_get_contents("./posts/hello-world.txt")
?>
<html>
<head>
    <title>My blog</title>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <hr>
    </nav>
    <article>
        <?php echo htmlspecialchars($post_content); ?>
    </article>
    <footer>
        <hr>
        <p><i>(c) <?php echo htmlspecialchars($author); ?>, <?php echo date("Y"); ?></i></p>
    </footer>
</body>
</html>
