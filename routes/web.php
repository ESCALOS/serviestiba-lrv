<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\SuggestionController;
use App\Http\Controllers\WorkWithUsController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/nosotros', 'About');
Route::inertia('/servicios', 'Services');
Route::inertia('/contactenos', 'Contact');
Route::inertia('/politicas', 'Policies');
Route::inertia('/trabaja-con-nosotros', 'WorkWithUs');

Route::post('/contactenos', ContactController::class)->name('contact.mail');
Route::post('/buzón-de-sugerencias', SuggestionController::class)->name('suggestion.mail');
Route::post('/trabaja-con-nosotros', WorkWithUsController::class)->name('work-with-us.mail');

require __DIR__.'/auth.php';
