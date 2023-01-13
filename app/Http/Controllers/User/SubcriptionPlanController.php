<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscriptions;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class SubcriptionPlanController extends Controller
{
    public function index(){

        return Inertia('User/Dashboard/SubcriptionPlan/Index', [
            'subcriptionPlans' => SubscriptionPlan::all()
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subcriptionPlan){

//        [
//            'user_id',
//            'subscription_plan_id',
//            'price',
//            'expired_date',
//            'payment_status',
//            'snapToken'
//        ]
        $data = [
          'user_id' => Auth::id(),
          'subscription_plan_id' => $subcriptionPlan->id,
          'price' => $subcriptionPlan->price,
          'expired_date' => Carbon::now()->addMonths($subcriptionPlan->active_period_in_months),
          'payment_status' => 'paid',
        ];

        $userSubcription = UserSubscriptions::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
