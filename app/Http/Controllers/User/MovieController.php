<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movies;

class MovieController extends Controller
{
    public function show(Movies $movies)
    {
//       $movieShow = Movies::where
        return Inertia('User/Dashboard/Movie/Show', [
            'movie' => $movies
        ]);
    }
}
