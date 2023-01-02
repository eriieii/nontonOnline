import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from 'react-flickity-component';
import {Head} from '@inertiajs/inertia-react';
import FeauturedMovies from "@/Components/FeaturedMovies";
import BrowseMovies from "@/Components/BrowseMovies";

export default function Dashboard({auth, featuredMovie, movies}) {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
    return <Authenticated auth={auth}>
        <Head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/flickity@2/dist/flickity.min.css"
            />
        </Head>
        <div>
            <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
            {/* Movie Thumbnail  */}
            <Flickity className="gap-[30px]" options={flickityOptions}>
                {featuredMovie.map(featuredMovie =>
                    <FeauturedMovies
                        key={featuredMovie.id}
                        slug={featuredMovie.slug}
                        name={featuredMovie.name}
                        category={featuredMovie.category}
                        thumbnail={featuredMovie.thumbnail}
                        rating={featuredMovie.rating}
                    />
                )}
            </Flickity>
        </div>

        <div className="mt-[50px]">
            <div className="font-semibold text-[22px] text-black  mb-4">Browse</div>
            <Flickity className="gap-[30px]" options={flickityOptions}>
                {movies.map(movies =>
                    <BrowseMovies
                        key={movies.id}
                        slug={movies.slug}
                        name={movies.name}
                        category={movies.category}
                        thumbnail={movies.thumbnail}
                    />
                )}
            </Flickity>
        </div>
    </Authenticated>
}
