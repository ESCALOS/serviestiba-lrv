<?php

namespace App\Http\Controllers;

use App\Mail\WhistleblowingMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class WhistleblowingController extends Controller
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
            'email.required' => 'El correo es obligatorio',
            'email.email' => 'El correo es invalido',
            'phone.required' => 'El teléfono es obligatorio',
            'phone.max' => 'El teléfono debe tener menos de 20 caracteres',
            'type.required' => 'Debe seleccionar un tipo',
            'type.string' => 'El tipo debe ser de caracteres alfanuméricos',
            'type.max' => 'El tipo debe tener menos de 255 caracteres',
            'type.min' => 'El tipo debe tener al menos 3 caracteres',
            'category.required' => 'Debe seleccionar una categoría',
            'category.string' => 'La categoría debe ser de caracteres alfanuméricos',
            'category.max' => 'La categoría debe tener menos de 255 caracteres',
            'category.min' => 'La categoría debe tener al menos 3 caracteres',
            'message.required' => 'Debe indicar su sugerencia',
            'message.string' => 'La sugerencia debe ser de caracteres alfanuméricos',
            'message.max' => 'La sugerencia debe tener menos de 255 caracteres',
            'message.min' => 'La sugerencia debe tener al menos 3 caracteres',
            'acceptedPolicy.required' => 'Debe aceptar la política de privacidad',
            'acceptedPolicy.accepted' => 'Debe aceptar la política de privacidad',
        ];
        // Validación de los datos
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|min:3|max:255',
            'lastName' => 'required|string|min:3|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|min:3|max:255',
            'type' => 'required|string|min:3|max:255',
            'category' => 'required|string|min:3|max:255',
            'message' => 'required|string|min:3|max:255',
            'acceptedPolicy' => 'required|boolean|accepted',
        ], $customMessages);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        Mail::to(env('WHISTLEBLOWING_EMAIL'))->send(new WhistleblowingMail($request->all()));

        return redirect()->back()->with('success', 'Mensaje enviado correctamente.');
    }
}
