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
            'firstName.string' => 'El nombre debe ser de caracteres alfanuméricos',
            'firstName.max' => 'El nombre debe tener menos de 255 caracteres',
            'firstName.min' => 'El nombre debe tener al menos 3 caracteres',
            'lastName.required' => 'El apellido es obligatorio',
            'lastName.string' => 'El apellido debe ser de caracteres alfanuméricos',
            'lastName.max' => 'El apellido debe tener menos de 255 caracteres',
            'lastName.min' => 'El apellido debe tener al menos 3 caracteres',
            'jobArea.required' => 'El área de trabajo es obligatoria',
            'jobArea.string' => 'El área de trabajo debe ser de caracteres alfanuméricos',
            'jobArea.max' => 'El área de trabajo debe tener menos de 255 caracteres',
            'jobArea.min' => 'El área de trabajo debe tener al menos 3 caracteres',
            'suggestion.required' => 'Debe indicar su sugerencia',
            'suggestion.string' => 'La sugerencia debe ser de caracteres alfanuméricos',
            'suggestion.max' => 'La sugerencia debe tener menos de 255 caracteres',
            'suggestion.min' => 'La sugerencia debe tener al menos 3 caracteres',
            'acceptedPolicy.required' => 'Debe aceptar la política de privacidad',
            'acceptedPolicy.accepted' => 'Debe aceptar la política de privacidad',
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

        return redirect()->back()->with('success', 'Mensaje enviado correctamente.');
    }
}
