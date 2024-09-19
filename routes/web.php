<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/nosotros', 'About');
Route::inertia('/servicios', 'Services');
Route::inertia('/contactenos', 'Contact');

require __DIR__.'/auth.php';
