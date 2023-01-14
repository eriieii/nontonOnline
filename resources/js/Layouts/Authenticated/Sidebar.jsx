import { Head, Link } from '@inertiajs/inertia-react';
import SubcriptionDetail from "@/Layouts/Authenticated/SubcriptionDetail";
import MenuItem from "@/Layouts/Authenticated/MenuItem";
import { UserMenu, UserOthers } from "./MenuList";

export default function Sidebar({ auth }) {
    return (
        <>
        <Head title="Dashboard" />
        <aside className="fixed z-50 w-[300px] h-full">

            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <Link href={route('user.dashboard.index')}>
                    <img src="/images/moonton.svg" alt="" />
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                menu.link && route().current(menu.link)
                                }
                            />
                        ))}

                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>



                    {auth.activePlan &&
                        <SubcriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === 'Premium'}
                            remainingActiveday={auth.activePlan.remainingActiveDays}
                            activeDay={auth.activePlan.activeDays}
                        />}
                </div>
            </div>
        </aside>
        </>

    );

}
