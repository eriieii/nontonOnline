import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from '@inertiajs/inertia-react';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/Input";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import {Inertia} from "@inertiajs/inertia";
export default function Edit({ auth, movie }) {
    const { data,setData, processing, errors } = useForm({
       ...movie,
    });

    const onHandleChange = (event) => {
        setData(event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        if(data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: "PUT",
            ...data
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update Movie : {movie.name}</h1>
            <hr className="mb-4"></hr>

            <form className="w-[370px]" onSubmit={submit}>
                <div>
                    <InputLabel
                        forInput="name"
                        value="Name Movie"
                    />
                    <TextInput
                        type="text"
                        name="name"
                        variant="primary-outline"
                        placeholder="Enter Name New Movie"
                        defaultValue={movie.name}
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        forInput="category"
                        value="Category"
                        className="mt-4"
                    />
                    <TextInput
                        type="text"
                        name="category"
                        variant="primary-outline"
                        placeholder="Enter Name New Category"
                        defaultValue={movie.category}

                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.category} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        forInput="video_url"
                        value="Video Url"
                        className="mt-4"
                    />
                    <TextInput
                        type="url"
                        name="video_url"
                        variant="primary-outline"
                        placeholder="Enter Video URL"
                        defaultValue={movie.video_url}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        forInput="thumbnail"
                        value="Thumbnail"
                        className="mt-4"
                    />
                    <img src={`/storage/${movie.thumbnail}`} alt={movie.name} className="w-40" />
                    <TextInput
                        type="file"
                        name="thumbnail"
                        variant="primary-outline"
                        placeholder="Enter Thumbnail"
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        forInput="rating"
                        value="Rating"
                        className="mt-4"
                    />
                    <TextInput
                        type="number"
                        name="rating"
                        variant="primary-outline"
                        placeholder="Enter Rating"
                        defaultValue={movie.rating}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) => setData("is_featured", e.target.checked)}
                        checked={movie.is_featured}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    processing={processing}>
                    Submit
                </Button>





            </form>
        </Authenticated>
    );
}
