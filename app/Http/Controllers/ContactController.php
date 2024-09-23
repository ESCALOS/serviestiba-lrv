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
        $customMessages = [
            'name.required' => 'El nombre es obligatorio',
            'name.string' => 'El nombre debe ser de caracteres alfanuméricos',
            'name.max' => 'El nombre debe tener menos de 255 caracteres',
            'name.min' => 'El nombre debe tener al menos 3 caracteres',
            'email.required' => 'El correo es obligatorio',
            'email.email' => 'El correo es invalido',
            'phone.required' => 'El teléfono es obligatorio',
            'phone.max' => 'El teléfono debe tener menos de 20 caracteres',
            'province.required' => 'Ingrese la provincia',
            'province.string' => 'La provincia debe ser de caracteres alfanuméricos',
            'province.max' => 'La provincia debe tener menos de 255 caracteres',
            'province.min' => 'La provincia debe tener al menos 3 caracteres',
            'city.required' => 'Ingrese la ciudad',
            'city.string' => 'La ciudad debe ser de caracteres alfanuméricos',
            'city.max' => 'La ciudad debe tener menos de 255 caracteres',
            'city.min' => 'La ciudad debe tener al menos 3 caracteres',
            'message.required' => 'Dinos tu duda',
            'message.string' => 'El mensaje debe ser de caracteres alfanuméricos',
            'message.max' => 'El mensaje debe tener menos de 255 caracteres',
            'message.min' => 'El mensaje debe tener al menos 3 caracteres',
            'acceptedPolicy.required' => 'Debe aceptar la política de privacidad',
        ];
        // Validación de los datos
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'province' => 'required|string|min:3|max:255',
            'city' => 'required|string|min:3|max:255',
            'message' => 'required|string|min:3|max:255',
            'acceptedPolicy' => 'required|boolean|accepted',
        ], $customMessages);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        Mail::to(env('CONTACT_EMAIL'))->send(new ContactMail($request->all()));

        return redirect()->back()->with('success', 'Mensaje enviado correctamente.');
    }
}
