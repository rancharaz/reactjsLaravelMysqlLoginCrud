<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    //
    public function register(Request $request){
        /* register function with validation */
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|',
            'password'=> 'required|string'
        ]);

        /* create user */
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);
        /* token */
        $response = [
            'user' => $user
        ];
        return response($response, 201);
    }
    function login(Request $request){
        /* register function with validation */
        $fields = $request->validate([
            'email' => 'required|string',
            'password'=> 'required|string'
        ]);
        /* search for the email that is first */
        $user = User::where('email', $fields['email'])->first();
               /* check password */
               if(!$user || !Hash::check($fields['password'], $user->password)){
                return response([
                    'message' => 'Credentials are not correct.'
                ], 401);
            } else {
              return  $user;
            }
    }

}
