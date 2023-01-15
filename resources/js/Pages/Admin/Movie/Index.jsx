import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
<<<<<<< HEAD
import FlashMessage from "@/Components/FlashMessage";
import {Link} from "@inertiajs/inertia-react";
export default function Index({ auth, flashMessage }) {
=======
import {Link} from "@inertiajs/inertia-react";
export default function Index({ auth }) {
>>>>>>> origin/feature/admin
    return(
        <Authenticated auth={auth}>
            <Link href={route('admin.dashboard.movie.create')}>
                <Button
                type="button"
                className="w-40 mb-8">
                    New Movie
                </Button>
            </Link>
<<<<<<< HEAD
            {flashMessage?.message &&
                <FlashMessage message={flashMessage.message}/>
            }

=======
>>>>>>> origin/feature/admin
        </Authenticated>
        );
}
