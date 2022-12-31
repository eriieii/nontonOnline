<?php

namespace Database\Seeders;

use App\Models\Movies;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
          [
            'name' => 'Spiderman Amazing',
            'slug' => 'spiderman-amazing',
            'category' => 'Action',
            'video_url' => 'https://www.youtube.com/watch?v=nbp3Ra3Yp74',
              'thumbnail' => 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              'rating' => 9.5,
              'is_featured' => 1,
          ],
          [
            'name' => 'Avatar: The Way of Water',
            'slug' => 'avatar-the-way-of-water',
            'category' => 'Action',
            'video_url' => 'https://www.youtube.com/watch?v=o5F8MOz_IDw',
            'thumbnail' => 'https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
              'rating' => 8.5,
              'is_featured' => 0,
          ],
         [
             'name' => 'John Wick',
             'slug' => 'john-wick',
             'category' => 'Action,Drama',
             'video_url' => 'https://www.youtube.com/watch?v=C0BMx-qxsP4',
             'thumbnail' => 'https://images.unsplash.com/photo-1621274283140-e4450435a76a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80',
              'rating' => 7.5,
             'is_featured' => 0,
          ],
        ];

        Movies::insert($movies);
    }
}
