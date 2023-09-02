<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/products', [ProductController::class, 'index']);/* show all products */
Route::post('/add-products', [ProductController::class, 'store']);/* store/add products */
Route::get('/products/{id}', [ProductController::class, 'show']);/* show by id */
Route::get('/search/{key}', [ProductController::class, 'search']);    /* search by key name */
Route::put('/products/{id}', [ProductController::class, 'update']);    /* update by id */


Route::post('/register', [UserController::class, 'register']);/* reigster user */
Route::post('/login', [UserController::class, 'login']);/* login user */
Route::delete('/products/{id}', [ProductController::class, 'destroy']);/* delete products by id */

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 */
