<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\SuggestionController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/nosotros', 'About');
Route::inertia('/servicios', 'Services');
Route::inertia('/contactenos', 'Contact');
Route::inertia('/politicas', 'Policies');

Route::post('/contactenos', ContactController::class)->name('contact.mail');
Route::post('/buzón-de-sugerencias', SuggestionController::class)->name('contact.suggestion');

require __DIR__.'/auth.php';
