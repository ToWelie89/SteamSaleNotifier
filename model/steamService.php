<?php
    $json = file_get_contents('http://api.steampowered.com/ISteamApps/GetAppList/v0002');
    $obj = json_decode($json);
    $apps = $obj->applist->apps;
    echo json_encode($apps);
?>