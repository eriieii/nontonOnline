import { useEffect } from 'react';
import InputLabel from "@/Components/Input";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputError from "@/Components/InputError";

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name,event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        // console.log(data);
        post(route('register'));
    };

    return  (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                         className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br/>
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput="fullname"
                                        value="Full Name"
                                    />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your Fullname..."
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />

                                </div>
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Your Email Address"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />

                                </div>
                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Your Password"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />

                                </div>

                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value="Confirm Password"
                                    />
                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Confirm Password"
                                        value={data.password_confirmation}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />

                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">



                                <Button type="submit" variant="primary" processing={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>



                                <Link href={route('login')}>
                                    <Button type="button" variant="btn-light-outline">
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );


}
