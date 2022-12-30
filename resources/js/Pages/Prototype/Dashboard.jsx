import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from 'react-flickity-component';
import {Head} from '@inertiajs/inertia-react';
import FeauturedMovies from "@/Components/FeaturedMovies";

export default function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
    return <Authenticated>
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
                        {[1,2,3,4].map(i =>
                            <FeauturedMovies
                                key={i}
                                slug="batman-in-love"
                                name={`The Batman in love ${i}`}
                                category="Comedy"
                                thumbnail="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                                rating={i + 1}
                            />
                        )}

                    </Flickity>
         </div>
    </Authenticated>
}
