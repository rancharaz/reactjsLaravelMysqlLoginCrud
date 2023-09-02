<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // method to get all product
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // the var $product is targeting the modal(1) and the table items to request the input to be added(2);
        $product = new Product;
        /* 2 */
        $product->name=$request->input('name');
        $product->price=$request->input('price');
        $product->description=$request->input('description');
        $product->file_path=$request->file('file')->store('products');
        /* 1 store uploaded file */ /* to get access config->filesystems->links */
        /* 2 run php artisan storage:link */
        $product->save(); /* save method */
        return $product;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // find by id
        return Product::find($id);


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $product = Product::find($id);
        $product->update($request->all());
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return Product::destroy($id);
    }


        /**
     * Remove the specified resource from storage.
     *
     * @param  int  $key
     * @return \Illuminate\Http\Response
     */
    /* search by key name */
    public function search($key)
    {
        //
        return Product::where('name', 'like', "%$key%")->get();
    }


}
