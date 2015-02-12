<?php
//* Do NOT include the opening php tag

//* Enqueue audio script
add_action( 'wp_enqueue_scripts', 'enqueue_audio_on_menu_items_click' );
function enqueue_audio_on_menu_items_click() {

	wp_enqueue_script( 'load-audio',  get_stylesheet_directory_uri() . '/js/load-audio.js', array( 'jquery' ), '', true );

}