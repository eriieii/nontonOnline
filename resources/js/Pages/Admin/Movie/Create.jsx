import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from '@inertiajs/inertia-react';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/Input";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false,
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
        post(route('admin.dashboard.movie.store'));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert New Movie</h1>
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
                        isFocused={true}
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
                        isFocused={true}
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
                    <TextInput
                        type="file"
                        name="thumbnail"
                        variant="primary-outline"
                        placeholder="Enter Thumbnail"
                        isFocused={true}
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
                        isFocused={true}
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
