<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => '@webroot/dist/.vite/manifest.json',
    'devServerPublic' => 'https://'.App::env('VITE_SITE_URL').':5173/',
    'serverPublic' => '/dist/',
    'errorEntry' => '',
    'cacheKeySuffix' => '',
    'devServerInternal' => '',
    'checkDevServer' => false,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'criticalPath' => '@webroot/dist/criticalcss',
    'criticalSuffix' =>'_critical.min.css',
];