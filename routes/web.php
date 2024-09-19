<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/nosotros', 'About');
Route::inertia('/servicios', 'Services');
Route::inertia('/contactenos', 'Contact');
Route::inertia('/politicas', 'Policies');

Route::post('/contactenos', ContactController::class)->name('contact.mail');

require __DIR__.'/auth.php';
