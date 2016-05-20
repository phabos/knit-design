<?php

$files = new \RecursiveIteratorIterator( new \RecursiveDirectoryIterator( '/Users/f.prezat/www/test/tricot/assets/symbols' ), \RecursiveIteratorIterator::SELF_FIRST );

foreach ( $files as $file ) {
    echo 'assets/symbols/' . basename( $file->__toString() ) . "\n";
}