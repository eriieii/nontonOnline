<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubcriptionPlanController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::redirect('/', '/login');

//Route::get('/dashboard', function () {
//    return Inertia::render('User/Dashboard/Index');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/movie/{movies:slug}', [MovieController::class, 'show'])->name('movie.show');
    Route::get('subscription-plan', [SubcriptionPlanController::class, 'index'])->name('subcription.index');
    Route::post('subscription-plan/{subcriptionPlan}/user-subscribe', [SubcriptionPlanController::class, 'userSubscribe'])->name('subcription.userSubscribe');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::resource('movie',AdminMovieController::class);
});
Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subcriptionPlan', function () {
        return Inertia::render('Prototype/SubcriptionPlan');
    })->name('subcriptionPlan');

    route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
