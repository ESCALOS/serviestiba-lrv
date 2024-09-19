<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // Validación de los datos
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'province' => 'required|string|min:3|max:255',
            'city' => 'required|string|min:3|max:255',
            'message' => 'required|string|min:3|max:255',
            'acceptedPolicy' => 'required|boolean|accepted',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        Mail::to(env('CONTACT_EMAIL'))->send(new ContactMail($request->all()));

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
