import Authenticated from "@/Layouts/Authenticated/index";
import SubcriptionCard from "@/Components/SubcriptionCard";
import { Inertia } from "@inertiajs/inertia";

export default function SubcriptionPlan({auth, subcriptionPlans}) {
    const  selectSubcription = id => {
        Inertia.post(route("user.dashboard.subcription.userSubscribe", {subcriptionPlan: id}))
    }
    return (
        <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/*Pricing Card*/}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {subcriptionPlans.map(subcriptionPlans =>
                        <SubcriptionCard isPremium = {subcriptionPlans.name === 'Premium'}
                                         name={subcriptionPlans.name}
                                         price={subcriptionPlans.price}
                                         durationMonth={subcriptionPlans.active_period_in_months}
                                         features={JSON.parse(subcriptionPlans.features)}
                                         key={subcriptionPlans.id}
                                         onSelectSubcription={() => selectSubcription(subcriptionPlans.id)}
                        />
                    )}
                </div>

            </div>
        </Authenticated>
    )
}


