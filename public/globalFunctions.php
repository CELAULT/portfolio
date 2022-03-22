<?php

function dateDiff($date1, $date2)
{
    $diff = abs($date1 - $date2);
    $retour = array();

    $tmp = $diff;
    $retour['second'] = $tmp % 60;

    $tmp = floor(($tmp - $retour['second']) / 60);
    $retour['minute'] = $tmp % 60;

    $tmp = floor(($tmp - $retour['minute']) / 60);
    $retour['hour'] = $tmp % 24;

    $tmp = floor(($tmp - $retour['hour']) / 24);
    $retour['day'] = $tmp;

    return floor($retour['day'] / 366);
}