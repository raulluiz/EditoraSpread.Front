import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((error: { status: number; }) => {
      console.error('Erro HTTP:', error);

      // Exemplo: redirecionar se for não autorizado
      if (error.status === 401) {
        router.navigate(['/login']);
      }

      throw error;
    })
  );
};
