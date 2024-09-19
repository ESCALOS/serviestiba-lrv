<?php

namespace App\Http\Controllers;

use App\Mail\SuggestionMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class SuggestionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $customMessages = [
            'firstName.required' => 'El nombre es obligatorio',
            'lastaName.required' => 'El apellido es obligatorio',
            'jobArea.required' => 'El área de trabajo es obligatoria',
            'suggestion.required' => 'El detalle de la sugerencia es obligatorio',
            'acceptedPolicy.required' => 'Debe aceptar la política de privacidad',
        ];
        // Validación de los datos
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|min:3|max:255',
            'lastName' => 'required|string|min:3|max:255',
            'jobArea' => 'required|string|min:3|max:255',
            'suggestion' => 'required|string|min:3|max:255',
            'acceptedPolicy' => 'required|boolean|accepted',
        ], $customMessages);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        Mail::to(env('SUGGESTION_EMAIL'))->send(new SuggestionMail($request->all()));

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
