import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ConnectionServiceService } from 'src/app/conteo-votos/services/connection-service.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private connectionService: ConnectionServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      tap((event) => {
        // Si la petición fue completada con éxito, se borra el error de conexión
        if (event instanceof HttpResponse) {
          this.connectionService.clearConnectionError();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Manejar errores del lado del cliente
          console.log('Error Cliente');
        } else {
          console.log('Error Servidor');
          this.connectionService.setConnectionError(
            'Error al conectar con la API'
          );
          // Manejar errores del lado del servidor
        }
        return throwError(
          'Ha ocurrido un error en la conexión. Por favor, inténtalo de nuevo más tarde.'
        );
      })
    );
  }
}
