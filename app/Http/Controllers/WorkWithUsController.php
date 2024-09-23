<?php

namespace App\Http\Controllers;

use App\Mail\WorkWithUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class WorkWithUsController extends Controller
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
            'resume.required' => 'Debe adjuntar un CV',
            'resume.file' => 'Debe adjuntar un CV',
            'resume.mimes' => 'Debe adjuntar un CV',
            'resume.max' => 'El archivo debe ser menor a 2MB',
            'message.required' => 'Indica tus habilidades',
            'message.string' => 'El mensaje debe ser de caracteres alfanuméricos',
            'message.max' => 'El mensaje debe tener menos de 255 caracteres',
            'message.min' => 'El mensaje debe tener al menos 3 caracteres',
            'acceptedPolicy.required' => 'Debe aceptar la política de privacidad',
            'acceptedPolicy.accepted' => 'Debe aceptar la política de privacidad',
        ];
        // Validación de los datos
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|min:3|max:255',
            'lastName' => 'required|string|min:3|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'resume' => 'required|file|mimes:pdf,doc,docx',
            'message' => 'required|string|min:3|max:255|max:2048',
            'acceptedPolicy' => 'required|boolean|accepted',
        ], $customMessages);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Guardar el archivo en el servidor
        if ($request->hasFile('resume')) {
            $filePath = $request->file('resume')->store('resumes');
        }

        Mail::to(env('WORK_WITH_US_EMAIL'))->send(new WorkWithUsMail($request->all(), $filePath ?? null));

        return redirect()->back()->with('success', 'Mensaje enviado correctamente.');
    }
}
