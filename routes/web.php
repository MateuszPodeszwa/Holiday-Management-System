<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// I don't know what it does
Route::get('/', function () {
    return Inertia::render('Auth/LoginPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Add /logintest page
Route::get('/oldlogin', function () {
   return Inertia::render('Auth/Login');
})->name('login');

// You can edit the login in the AuthenticatedSessionController.php

// Only logged users can access dashboard
Route::get('/dashboard/home', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Redirect all logged to deshboard
Route::get('/', function () {
    return redirect()->route('dashboard'); // Redirect logged-in users to the dashboard
})->middleware(['guest']);

// Who knows what is this
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
