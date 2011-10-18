<?php

/**
 * @file
 * Administration page for scroll to top module
 *
 */

function scroll_to_top_settings() {
$form = array();
  
  $form['scroll_to_top_position'] = array(
    '#title' => t('Position'),
    '#description' => t('Sroll to top link position'),
    '#type' => 'select',
    '#options' => array(
      1 => t('right'),
      2 => t('left'),
    ),
    '#default_value' => variable_get('scroll_to_top_position', 1),
  );

  return system_settings_form($form);
}
